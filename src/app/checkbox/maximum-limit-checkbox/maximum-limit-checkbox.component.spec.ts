import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumLimitCheckboxComponent } from './maximum-limit-checkbox.component';

describe('MaximumLimitCheckboxComponent', () => {
  let component: MaximumLimitCheckboxComponent;
  let fixture: ComponentFixture<MaximumLimitCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumLimitCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximumLimitCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
