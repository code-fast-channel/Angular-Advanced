import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCheckboxSgComponent } from './reactive-form-checkbox-sg.component';

describe('ReactiveFormCheckboxSgComponent', () => {
  let component: ReactiveFormCheckboxSgComponent;
  let fixture: ComponentFixture<ReactiveFormCheckboxSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCheckboxSgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCheckboxSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
