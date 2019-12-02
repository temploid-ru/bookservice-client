import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Konva from 'konva';
import {
  IRestaurantTable,
  RestaurantTableStatusEnum,
  RestaurantTableTypeEnum
} from '@interfaces/restaurant-table.interface';
import {TouchHelperService} from '@app/_services/touch-helper/touch-helper.service';

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.sass']
})
export class ClientMapComponent implements OnInit {
  @Output() preview = new EventEmitter<IRestaurantTable>();
  @Input() tables: IRestaurantTable[];
  @Input() selectedTable: IRestaurantTable;

  stage: Konva.Stage;
  mapLayer: Konva.Layer;
  tablesLayer: Konva.Layer;
  scale = 1;
  mapScale;
  lastDist = 0;
  image;
  imageLayer: Konva.Image;
  style = {
    [RestaurantTableStatusEnum.DEFAULT]: {
      table: {
        strokeWidth: 1,
        stroke: '#333',
        fill: '#FFFFFF',
      },
      text: {
        fill: '#333'
      }
    },
    [RestaurantTableStatusEnum.ACTIVE]: {
      table: {
        strokeWidth: 1,
        stroke: '#333',
        fill: '#1EC025'
      },
      text: {
        fill: '#fff'
      }
    },
    [RestaurantTableStatusEnum.BLOCKED]: {
      table: {
        strokeWidth: 1,
        stroke: '#333',
        fill: '#444',
      },
      text: {
        fill: '#fff'
      }
    }
  };

  constructor(private elRef: ElementRef,
              private touchS: TouchHelperService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.init();
    }, 500);
  }

  init() {
    const _self = this;

    this.stage = new Konva.Stage({
      draggable: true,
      dragBoundFunc: function(pos) {
        let x: number;
        let y: number;
        if (_self.scale > 1) {
          [x, y] = _self.countPosition(pos);
        } else {
          [x, y] = [this.absolutePosition().x, this.absolutePosition().y];
        }

        return {x, y};
      },
      scale: {
        x: this.scale,
        y: this.scale
      },
      // offset: {
      x: -this.elRef.nativeElement.closest('#client-map').clientWidth * (this.scale - 1) / 2,
      y: -this.elRef.nativeElement.closest('#client-map').clientHeight * (this.scale - 1) / 2,
      // },
      width: this.elRef.nativeElement.closest('#client-map').clientWidth,
      height: this.elRef.nativeElement.closest('#client-map').clientHeight,
      container: 'table-map'
    });

    this.mapLayer = new Konva.Layer();

    this.stage.add(this.mapLayer);

    this.tablesLayer = new Konva.Layer();
    this.stage.add(this.tablesLayer);

    const image = new Image();
    this.image = image;
    image.src = './assets/resto.jpg';

    image.onload = () => {
      const scale = Math.min(this.stage.width() / image.width, this.stage.height() / image.height);
      this.mapScale = scale;

      const imageLayer = new Konva.Image({
        image,
        x: (this.stage.width() - image.width * scale) / 2,
        y: (this.stage.height() - image.height * scale) / 2,
        width: image.width * scale,
        height: image.height * scale
      });
      this.imageLayer = imageLayer;

      this.mapLayer.add(imageLayer);
      this.mapLayer.draw();
      this.drawTables();
    };

    this.stage.getContent().addEventListener('touchmove', (e: TouchEvent) => {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];

      if (touch1 && touch2) {
        this.stage.draggable(false);
        const dist = this.touchS.getDistance(
          {
            x: touch1.clientX,
            y: touch1.clientY
          },
          {
            x: touch2.clientX,
            y: touch2.clientY
          }
        );

        if (!this.lastDist) {
          this.lastDist = dist;
        }
        const oldScale = this.stage.scaleX();
        this.scale = (this.stage.scaleX() * dist) / this.lastDist;
        this.scale = this.scale < 1 ? 1 : this.scale > 4 ? 4 : this.scale;
        this.stage.scale({
          x: this.scale,
          y: this.scale
        });

        this.stage.x(this.stage.x() - (this.stage.width() * this.scale - this.stage.width() * oldScale) / 2);
        this.stage.y(this.stage.y() - (this.stage.height() * this.scale - this.stage.height() * oldScale) / 2);

        const _newPos = this.countPosition(this.stage.position());
        this.stage.position({
          x: _newPos[0],
          y: _newPos[1]
        });
        this.stage.draw();
        this.lastDist = dist;
      }
    }, false);

    this.stage.getContent().addEventListener(
      'touchend',
      () => {
        this.stage.draggable(true);
        this.lastDist = 0;
      },
      false
    );

    this.tablesLayer.on('click tap', (e) => {
      this.preview.emit(this.tables.find(table => table.id === e.target.parent.id()));
      if (this.selectedTable) {
        this.setTableInactive(this.selectedTable.id);
      }
      this.setTableActive(e.target.parent.id());
      this.stage.draw();
    });
  }

  setTableActive(id: string) {
    if (!this.tables.find(table => table.id === id && table.status !== RestaurantTableStatusEnum.BLOCKED && table._numGuestsEnabled)) {
      return;
    }
    this._setTableStyle(id, RestaurantTableStatusEnum.ACTIVE);
  }

  setTableInactive(id: string) {
    this._setTableStyle(id, RestaurantTableStatusEnum.DEFAULT);
  }

  private _setTableStyle(id: string, type: RestaurantTableStatusEnum) {
    if (this.stage.findOne('#table-' + id)) {
      this.stage.findOne('#table-' + id).attrs = {
        ...this.stage.findOne('#table-' + id).attrs,
        ...this.style[type].table,
        strokeWidth: this.style[type].table.strokeWidth * this.mapScale
      };
    }

    if (this.stage.findOne('#text-' + id)) {
      this.stage.findOne('#text-' + id).attrs = {
        ...this.stage.findOne('#text-' + id).attrs,
        ...this.style[type].text
      };
    }
  }

  countPosition(pos: { x: number, y: number }) {
    let y: number;
    let x: number;

    if (this.imageLayer.width() * this.scale <= this.stage.width()) {
      x = (this.stage.width() / 2 * (1 - this.scale));
    } else {
      if (pos.x < -(this.imageLayer.x() + this.imageLayer.width()) * this.scale + this.stage.width()) {
        x = -(this.imageLayer.x() + this.imageLayer.width()) * this.scale + this.stage.width();
      } else if (pos.x > -this.imageLayer.x() * this.scale) {
        x = -this.imageLayer.x() * this.scale;
      } else {
        x = pos.x;
      }
    }
    if (this.imageLayer.height() * this.scale <= this.stage.height()) {
      y = (this.stage.height() / 2 * (1 - this.scale));
    } else {
      if (pos.y < -(this.imageLayer.y() + this.imageLayer.height()) * this.scale + this.stage.height()) {
        y = -(this.imageLayer.y() + this.imageLayer.height()) * this.scale + this.stage.height();
      } else if (pos.y > -this.imageLayer.y() * this.scale) {
        y = -this.imageLayer.y() * this.scale;
      } else {
        y = pos.y;
      }
    }


    return [x, y];
  }

  drawTables() {
    this.tables.forEach((table: IRestaurantTable) => {
      let style = {};
      let textStyle = {};
      if (table.status === RestaurantTableStatusEnum.BLOCKED || !table._numGuestsEnabled) {
        style = {...this.style.blocked.table};
        textStyle = {...this.style.blocked.text};
      } else if (this.selectedTable && this.selectedTable.id === table.id) {
        style = {...this.style.selected.table};
        textStyle = {...this.style.selected.text};
      }

      let _table;
      let _info;

      let _group = new Konva.Group({
        x: (table.position.x + (table.type === RestaurantTableTypeEnum.ROUND ? table.position.width / 2 : 0)) * this.mapScale + (this.stage.width() - this.image.width * this.mapScale) / 2,
        y: (table.position.y + (table.type === RestaurantTableTypeEnum.ROUND ? table.position.width / 2 : 0)) * this.mapScale + (this.stage.height() - this.image.height * this.mapScale) / 2,
        id: table.id
      });

      if (table.position.rotate !== undefined) {
        _group.rotation(table.position.rotate);
      }

      if (table.type === RestaurantTableTypeEnum.SQUARE || table.type === RestaurantTableTypeEnum.POLYGON) {
        _table = new Konva.Rect({
          ...this.style[RestaurantTableStatusEnum.DEFAULT].table,
          width: table.position.width * this.mapScale,
          height: table.position.height * this.mapScale,
          ...style,
          strokeWidth: this.style[RestaurantTableStatusEnum.DEFAULT].table.strokeWidth * this.mapScale,
          id: 'table-' + table.id,
          cornerRadius: 3 * this.mapScale
        });
      } else if (table.type === RestaurantTableTypeEnum.ROUND) {
        _table = new Konva.Circle({
          ...this.style[RestaurantTableStatusEnum.DEFAULT].table,
          ...style,
          strokeWidth: this.style[RestaurantTableStatusEnum.DEFAULT].table.strokeWidth * this.mapScale,
          id: 'table-' + table.id,
          radius: table.position.width / 2 * this.mapScale
        });
      }

      if (table.status !== RestaurantTableStatusEnum.BLOCKED && table._numGuestsEnabled) {
        _info = new Konva.Text({
          text: table.number.toString(),
          fontSize: Math.min(16, 16 * 2 / table.number.toString().split('').filter(item => item !== '.').length) * this.mapScale,
          rotation: -table.position.rotate,
          id: 'text-' + table.id,
          ...this.style[RestaurantTableStatusEnum.DEFAULT].text,
          ...textStyle
        });

        this.drawElements(table, _info, _table, _group);
      } else {
        const img = new Image();

        img.onload = () => {
          _info = new Konva.Image({
            image: img,
            width: img.width * this.mapScale,
            height: img.height * this.mapScale
          });

          this.drawElements(table, _info, _table, _group);
        };

        img.src = './assets/icons/icon-table-lock.svg';
      }

    });
  }

  drawElements(table, _info, _table, _group) {
    if (table.type === RestaurantTableTypeEnum.ROUND) {
      _info.x(_table.x());
      _info.y(_table.y());
    } else {
      _info.x(_table.x() + _table.width() / 2);
      _info.y(_table.y() + _table.height() / 2);
    }

    _info.offset({
      x: _info.width() / 2,
      y: _info.height() / 2 - 1 * this.mapScale,
    });

    if (!!_table) {
      _group.add(_table);
      _group.add(_info);
      this.tablesLayer.add(_group);
      this.tablesLayer.draw();
    }
  }
}
