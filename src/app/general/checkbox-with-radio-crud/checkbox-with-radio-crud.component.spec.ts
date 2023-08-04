import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithRadioCrudComponent } from './checkbox-with-radio-crud.component';

describe('CheckboxWithRadioCrudComponent', () => {
  let component: CheckboxWithRadioCrudComponent;
  let fixture: ComponentFixture<CheckboxWithRadioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxWithRadioCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithRadioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
