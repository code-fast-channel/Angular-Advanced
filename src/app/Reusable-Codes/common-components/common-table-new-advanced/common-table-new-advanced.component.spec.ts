import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableNewAdvancedComponent } from './common-table-new-advanced.component';

describe('CommonTableNewAdvancedComponent', () => {
  let component: CommonTableNewAdvancedComponent;
  let fixture: ComponentFixture<CommonTableNewAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTableNewAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTableNewAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
