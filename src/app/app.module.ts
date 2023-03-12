import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiLevelCheckboxComponent } from './checkbox/multi-level-checkbox/multi-level-checkbox.component';
import { MultipleLevelCheckboxWithParentDataComponent } from './checkbox/multiple-level-checkbox-with-parent-data/multiple-level-checkbox-with-parent-data.component';
import { MultiLevelCheckboxSetvalueComponent } from './checkbox/multi-level-checkbox-setvalue/multi-level-checkbox-setvalue.component';
import { SelectallCheckboxComponent } from './checkbox/checkbox-with-search/selectall-checkbox.component';
import { SearchTableDirectiveComponent } from './directive/search-table-directive/search-table-directive.component';
import {SearchPipe} from './checkbox/checkbox-with-search/search.pipe';
import { MaximumLimitCheckboxComponent } from './checkbox/maximum-limit-checkbox/maximum-limit-checkbox.component';
import { EllipsisTitleComponent } from './directive/ellipsis-title/ellipsis-title.component';

import {SearchPipeGs} from './directive/search-table-directive/searchgs.pipe';
import {EllipsifyMeDirective} from './directive/ellipsis-title/ellipsis.directive';
import { NumberOnlyDirectiveComponent } from './directive/number-only-directive/number-only-directive.component';
import { NumberDirective } from './directive/number-only-directive/number-only-directive';
import { OnlyDecimal } from './directive/number-only-directive/decimal-number-directive';
import { DynamicValidationAddRemovegsComponent } from './Form/dynamic-validation-add-removegs/dynamic-validation-add-removegs.component';
import { CustomValidationSgComponent } from './Form/custom-validation-sg/custom-validation-sg.component';
import { ScrollIntoInvalidFieldFormComponent } from './Form/scroll-into-invalid-field-form/scroll-into-invalid-field-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiLevelCheckboxComponent,
    MultipleLevelCheckboxWithParentDataComponent,
    MultiLevelCheckboxSetvalueComponent,
    SelectallCheckboxComponent,
    SearchTableDirectiveComponent,

    SearchPipe,
    SearchPipeGs,
    EllipsifyMeDirective,
    NumberDirective,
    OnlyDecimal,

    MaximumLimitCheckboxComponent,

    EllipsisTitleComponent,

    NumberOnlyDirectiveComponent,

    DynamicValidationAddRemovegsComponent,

    CustomValidationSgComponent,

    ScrollIntoInvalidFieldFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[SearchPipe,SearchPipeGs],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
