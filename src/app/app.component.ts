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

]
copyToClipboard(valgs:any) {
  const content = valgs;
  navigator['clipboard'].writeText(content).then().catch(e => console.error(e));

}

}
