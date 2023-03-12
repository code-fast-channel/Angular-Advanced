import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScrollIntoInvalidFieldFormComponent} from './Form/scroll-into-invalid-field-form/scroll-into-invalid-field-form.component'
const routes: Routes = [{
path:'form',
component:ScrollIntoInvalidFieldFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
