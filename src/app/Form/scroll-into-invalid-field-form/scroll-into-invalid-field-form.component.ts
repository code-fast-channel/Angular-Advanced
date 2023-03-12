import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ValidationErrors,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-scroll-into-invalid-field-form',
  templateUrl: './scroll-into-invalid-field-form.component.html',
  styleUrls: ['./scroll-into-invalid-field-form.component.css']
})
export class ScrollIntoInvalidFieldFormComponent implements OnInit {

  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.formName.get('terms&condition').valueChanges.subscribe((val: any) => {
      
    });
  }

  formName: any = this.fb.group({
    inputName: ['', Validators.required],
    'terms&condition': ['', Validators.required],
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    reason: ['',Validators.required],
  });

  ngOnInit() {}

  submit() {
    this.submitted = true;
    console.log('sgsg', this.formName);
    if (!this.formName.valid) {
      this.scrollToError();
      // alert('fill all the field sgsgs');
    }
    console.log('gsgs', this.formName.value);
  }

  scrollTo(el: any): void {
    if (el) {
       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
 }
 scrollToError(): void {
    const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
    this.scrollTo(firstElementWithError);
 }

}
