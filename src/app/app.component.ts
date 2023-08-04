import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 sg:any = [
   {
  title: 'Multiple level checkbox with parent data set value',
  selector: 'app-multi-level-checkbox-setvalue'
 },
   {
  title: 'Multiple level checkbox with parent data',
  selector: 'app-multi-level-checkbox'
 },
   {
  title: 'Checkbox with search',
  selector: 'app-selectall-checkbox'
 },
   {
  title: 'Checkbox with maximumsg',
  selector: 'app-maximum-limit-checkbox'
 },
   {
  title: 'Search data with single inputfieldsgs',
  selector: 'app-search-table-directive'
 },
   {
  title: 'Ellipsis with titlesg',
  selector: 'app-ellipsis-title'
 },
   {
  title: 'Number only directivegs',
  selector: 'app-number-only-directive'
 },
   {
  title: 'Form validation add and remove',
  selector: 'app-dynamic-validation-add-removegs'
 },
   {
  title: 'Custom Validation',
  selector: 'app-custom-validation-sg'
 },
   {
  title: 'Scroll to error Fieldsgsggs',
  selector: 'app-scroll-into-invalid-field-form'
 },
   {
  title: 'Reactive form with checkboxgssg',
  selector: 'app-reactive-form-checkbox-sg'
 },
   {
  title: 'Reactive form with checkboxgssg select all',
  selector: 'app-reactive-form-selectall-checkbox-sg'
 },
   {
  title: 'radio button',
  selector: 'app-radio-button-sg'
 },
   {
  title: 'scroll to div',
  selector: 'app-scroll'
 },
   {
  title: 'app edit value index based',
  selector: 'app-edit-value-index-based'
 },
   {
  title: 'checkbox with radio crud',
  selector: 'app-checkbox-with-radio-crud'
 },
   {
  title: 'checkbox with radio crud without reset',
  selector: 'app-checkbox-with-radio-crud'
 },
   {
  title: 'Reusable codes - Table,button',
  selector: 'app-reuse-example-general'
 },
   {
  title: 'Reusable codes - Form',
  selector: 'app-reusable-form'
 },
 {
  title: 'Reusable codes - Form - drag drop',
  selector: 'app-reusable-form-for-drag-drop'
 },

]
copyToClipboard(valgs:any) {
  const content = valgs;
  navigator['clipboard'].writeText(content).then().catch(e => console.error(e));

}

}
