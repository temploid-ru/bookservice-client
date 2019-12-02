import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {IRestaurantTable, IRestaurantTableTimeline, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {UiNotificationService} from '@app/ui/ui-notification/ui-notification.service';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class ReservationService {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);
  reservationTime$: BehaviorSubject<IRestaurantTableTimeline>;

  constructor(private http: HttpClient,
              private notificationS: UiNotificationService) {
  }

  getReservationDays(month: string) {
    return this.http.post('', {
      method: 'getWorkDates',
      month,
    });
  }

  getReservationTime(date: string) {
    return this.http.post('', {
      method: 'getWorkTime',
      date: moment(date).format('YYYY-MM-DD'),
    });
  }

  getReservationTables(data) {
    return this.http.post('', {
      method: 'tablesSearch',
      num_guests: data.num_guests,
      timecode: data.timecode
    })
      .pipe(
        map((items: any) => items.items.map(item => {
          const status = item.status.split(',');
          return {
            ...item,
            isActive: status[1] === 'available' && status[0] === 'active',
            status: status[1] === 'available' && status[0] === 'active' ? RestaurantTableStatusEnum.DEFAULT : RestaurantTableStatusEnum.BLOCKED,
            _numGuestsEnabled: item.num_persons >= data.num_guests,
          };
        })),
        tap((tables: any) => {
          this.tables$.next(tables);
        })
      );
  }

  makeReservation(data) {
    return this.http.post('', {
      method: 'bookingAdd',
      ...data
    }).pipe(
      tap(() => this.notificationS.open({title: 'Столик забронирован'}))
    );
  }

  editReservation(data) {
    return this.http.post('', {
      method: 'bookingEdit',
      ...data
    }).pipe(
      tap(() => this.notificationS.open({title: 'Бронь отредактирована'}))
    );
  }

  getReservationDetails(id: number) {
    return this.http.post('', {
      method: 'bookingGetDetails',
      id
    });
  }
}
