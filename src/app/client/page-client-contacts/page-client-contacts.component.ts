import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUiGroupSelectorItem} from '@app/ui/ui-group-selector/meta';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-page-client-contacts',
  templateUrl: './page-client-contacts.component.html',
  styleUrls: ['./page-client-contacts.component.sass']
})
export class PageClientContactsComponent implements OnInit {
  form: FormGroup;
  confirmOptions: IUiGroupSelectorItem[] = [
    {
      title: 'Отправить SMS',
      value: 'SMS'
    }
  ];

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _sessionStorage: SessionStorageService) {
  }

  ngOnInit() {
    const sessionForm = this._sessionStorage.retrieve('client:reservation:form');
    this.form = this._fb.group({
      name: [sessionForm ? sessionForm.name : null, Validators.required],
      phone: [sessionForm ? sessionForm.phone : null, Validators.required],
      confirmType: [this.confirmOptions[0]]
    });
  }

  submit(e: Event) {
    e.preventDefault();
    if (this.form.invalid) {
      return;
    }

    this._sessionStorage.store('client:reservation:form', {
      ...this._sessionStorage.retrieve('client:reservation:form'),
      ...this.form.value
    });

    this._router.navigateByUrl('/confirm');
  }

}
