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
import { ReactiveFormCheckboxSgComponent } from './Form/reactive-form-checkbox-sg/reactive-form-checkbox-sg.component';
import { ReactiveFormSelectallCheckboxSgComponent } from './Form/reactive-form-selectall-checkbox-sg/reactive-form-selectall-checkbox-sg.component';
import { RadioButtonSgComponent } from './Form/radio-button-sg/radio-button-sg.component';
import { ScrollComponent } from './general/scroll/scroll.component';
import { EditValueIndexBasedComponent } from './general/edit-value-index-based/edit-value-index-based.component';
import { CheckboxWithRadioCrudComponent } from './general/checkbox-with-radio-crud/checkbox-with-radio-crud.component';
import { CheckboxRadioWithCrudWithoutResetComponent } from './general/checkbox-radio-with-crud-without-reset/checkbox-radio-with-crud-without-reset.component';
import { CommonTableComponent } from './Reusable-Codes/common-components/common-table/common-table.component';
import { CommonButtonComponentComponent } from './Reusable-Codes/common-components/common-button-component/common-button-component.component';
import {ReuseExampleGeneralComponent} from './Reusable-Examples/reuse-example-general/reuse-example-general.component';
import { CommonFormComponent } from './Reusable-Codes/common-components/common-form/common-form.component';
import { ReusableFormComponent } from './Reusable-Examples/reusable-form/reusable-form.component';
import { VarientComponent } from './crudgs/varient/varient.component';
import { CrudDrapDropComponent } from './general/crud-drap-drop/crud-drap-drop.component';
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

    ScrollIntoInvalidFieldFormComponent,

    ReactiveFormCheckboxSgComponent,

    ReactiveFormSelectallCheckboxSgComponent,

    RadioButtonSgComponent,

    ScrollComponent,

    EditValueIndexBasedComponent,

    CheckboxWithRadioCrudComponent,

    CheckboxRadioWithCrudWithoutResetComponent,

    CommonTableComponent,

    CommonButtonComponentComponent,
    ReuseExampleGeneralComponent,
    CommonFormComponent,
    ReusableFormComponent,
    VarientComponent,
    CrudDrapDropComponent
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
