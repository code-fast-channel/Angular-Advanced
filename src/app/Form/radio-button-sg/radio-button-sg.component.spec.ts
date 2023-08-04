import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonSgComponent } from './radio-button-sg.component';

describe('RadioButtonSgComponent', () => {
  let component: RadioButtonSgComponent;
  let fixture: ComponentFixture<RadioButtonSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonSgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
