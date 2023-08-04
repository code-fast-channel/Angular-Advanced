import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormsAdvancedComponent } from './reusable-forms-advanced.component';

describe('ReusableFormsAdvancedComponent', () => {
  let component: ReusableFormsAdvancedComponent;
  let fixture: ComponentFixture<ReusableFormsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableFormsAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
