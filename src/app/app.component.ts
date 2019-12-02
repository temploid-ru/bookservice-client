import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {SessionService} from '@app/_services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'restaurant-project';

  constructor(private sessionS: SessionService) {
  }

  ngOnInit() {
    // this.sessionS.login().subscribe();
    moment.locale('ru');
  }
}
