import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextareaComponent} from "@app/ui/textarea/textarea.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TextareaModule {
}
