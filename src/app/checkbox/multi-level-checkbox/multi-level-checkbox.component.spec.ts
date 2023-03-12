import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelCheckboxComponent } from './multi-level-checkbox.component';

describe('MultiLevelCheckboxComponent', () => {
  let component: MultiLevelCheckboxComponent;
  let fixture: ComponentFixture<MultiLevelCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLevelCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
