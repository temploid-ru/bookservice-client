import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup-table-settings',
  templateUrl: './popup-table-settings.component.html',
  styleUrls: ['./popup-table-settings.component.sass']
})
export class PopupTableSettingsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _matDialogRef: MatDialogRef<PopupTableSettingsComponent>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [],
      count: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      number: [],
      type: []
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.form.invalid) {
      return;
    }

    this._matDialogRef.close(this.form.value);
  }

}
