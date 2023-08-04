import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleLevelCheckboxWithParentDataComponent } from './multiple-level-checkbox-with-parent-data.component';

describe('MultipleLevelCheckboxWithParentDataComponent', () => {
  let component: MultipleLevelCheckboxWithParentDataComponent;
  let fixture: ComponentFixture<MultipleLevelCheckboxWithParentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleLevelCheckboxWithParentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleLevelCheckboxWithParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
