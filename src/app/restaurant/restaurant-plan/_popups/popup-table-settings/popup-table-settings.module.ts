import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {PopupTableSettingsComponent} from './popup-table-settings.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [PopupTableSettingsComponent],
  exports: [PopupTableSettingsComponent],
  entryComponents: [PopupTableSettingsComponent]
})
export class PopupTableSettingsModule {
}
