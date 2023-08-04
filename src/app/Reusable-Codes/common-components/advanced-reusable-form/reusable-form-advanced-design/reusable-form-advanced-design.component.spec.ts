import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormAdvancedDesignComponent } from './reusable-form-advanced-design.component';

describe('ReusableFormAdvancedDesignComponent', () => {
  let component: ReusableFormAdvancedDesignComponent;
  let fixture: ComponentFixture<ReusableFormAdvancedDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableFormAdvancedDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormAdvancedDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
