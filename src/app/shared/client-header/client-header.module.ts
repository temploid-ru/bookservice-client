import {NgModule} from "@angular/core";
import {ClientHeaderComponent} from "@app/shared/client-header/client-header.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ClientHeaderComponent],
  exports: [ClientHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ClientHeaderModule {
}
