import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSelectallCheckboxSgComponent } from './reactive-form-selectall-checkbox-sg.component';

describe('ReactiveFormSelectallCheckboxSgComponent', () => {
  let component: ReactiveFormSelectallCheckboxSgComponent;
  let fixture: ComponentFixture<ReactiveFormSelectallCheckboxSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSelectallCheckboxSgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSelectallCheckboxSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
