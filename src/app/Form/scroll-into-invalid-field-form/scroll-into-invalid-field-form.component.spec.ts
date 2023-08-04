import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollIntoInvalidFieldFormComponent } from './scroll-into-invalid-field-form.component';

describe('ScrollIntoInvalidFieldFormComponent', () => {
  let component: ScrollIntoInvalidFieldFormComponent;
  let fixture: ComponentFixture<ScrollIntoInvalidFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollIntoInvalidFieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollIntoInvalidFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
