import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationSgComponent } from './custom-validation-sg.component';

describe('CustomValidationSgComponent', () => {
  let component: CustomValidationSgComponent;
  let fixture: ComponentFixture<CustomValidationSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidationSgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
