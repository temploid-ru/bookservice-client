import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  HostListener, Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import Konva from 'konva';
import {TransformerConfig} from 'konva/types/shapes/Transformer';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {untilDestroyed} from 'ngx-take-until-destroy';
import * as _ from 'underscore';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {TablesMapService} from '@app/_services/tables-map.service';
import {AdminRestaurantTablesQuery} from '@state/admin-restaurant-table';

@Component({
  selector: 'app-canvas-map',
  templateUrl: './canvas-map.component.html',
  styleUrls: ['./canvas-map.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasMapComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() addTable$: BehaviorSubject<any>;
  @Input() tables$: Observable<IRestaurantTable[]> = this.adminTableQ.selectAll();
  @Input() planImage: any;
  @Output() updateTable = new EventEmitter<IRestaurantTable>();
  @ViewChild('canvas', {static: false}) canvas: HTMLCanvasElement;
  selectedTable;
  stage;
  image;
  imageLayer;
  tableLayer: Konva.Layer;

  @HostListener('document:keydown', ['$event'])
  onKeypress(e: KeyboardEvent) {
    if (this.selectedTable && (e.keyCode === 8 || e.keyCode === 46)) {
      this.tablesMapS.deleteTable(this.selectedTable);
      delete this.selectedTable;
    }
  }

  constructor(private tablesMapS: TablesMapService,
              private adminTableQ: AdminRestaurantTablesQuery,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.addTable$
      .pipe(
        untilDestroyed(this),
        filter(table => !!table)
      )
      .subscribe((table: IRestaurantTable) => {
        const _table = this.tablesMapS.addTable(this.tableLayer, table.type, {_data: table});

        this.updateTable.emit(table);
        _table.on('dragend transformend', (e) => {
          const tableData: IRestaurantTable = {
            ...e.target.attrs._data,
            position: _.omit(e.target.attrs, '_data')
          };

          this.updateTable.emit(tableData);
        });
      });

    this.tables$.subscribe((tables: IRestaurantTable[]) => {
      console.log(tables);
    });

    this.selectPlan();
  }

  selectPlan() {
    this.planImage.onload = (e) => {
      const scale = Math.min((this.stage.width() / this.planImage.width), (this.stage.height() / this.planImage.height));
      this.imageLayer.children.destroy();
      const image = new Konva.Image({
        x: this.stage.width() <= this.planImage.width * scale ? 0 : Math.abs((this.stage.width() - this.planImage.width * scale)) / 2,
        y: this.stage.height() <= this.planImage.height * scale ? 0 : Math.abs((this.stage.height() - this.planImage.height * scale)) / 2,
        image: this.planImage,
        width: this.planImage.width * scale,
        height: this.planImage.height * scale
      });

      this.imageLayer.add(image);
      this.imageLayer.draw();
    };
  }

  ngAfterViewInit() {
    this.addCircle();
  }

  addCircle() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.stage = new Konva.Stage({
      container: 'container',
      width,
      height
    });

    this.imageLayer = new Konva.Layer();
    this.stage.add(this.imageLayer);

    this.tableLayer = new Konva.Layer();
    this.tableLayer.zIndex(2);
    this.stage.add(this.tableLayer);

    this.stage.on('click tap', (e) => {

      if (e.target === this.stage) {
        delete this.selectedTable;
        this.stage.find('Transformer').destroy();
        this.tableLayer.draw();
        return;
      }
      // do nothing if clicked NOT on our rectangles
      if (!e.target.hasName('rect')) {
        return;
      }
      // remove old transformers
      // TODO: we can skip it if current rect is already selected
      this.stage.find('Transformer').destroy();

      // create new transformer
      this.selectedTable = e.target;

      const trConf: TransformerConfig = {
        borderStrokeWidth: 0,
      };

      const tr = new Konva.Transformer(trConf);
      this.tableLayer.add(tr);
      tr.attachTo(e.target);
      this.tableLayer.draw();
    });
  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }

  ngOnDestroy() {
  }

}
