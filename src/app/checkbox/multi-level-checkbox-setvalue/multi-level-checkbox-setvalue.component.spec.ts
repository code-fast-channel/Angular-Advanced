import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelCheckboxSetvalueComponent } from './multi-level-checkbox-setvalue.component';

describe('MultiLevelCheckboxSetvalueComponent', () => {
  let component: MultiLevelCheckboxSetvalueComponent;
  let fixture: ComponentFixture<MultiLevelCheckboxSetvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLevelCheckboxSetvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelCheckboxSetvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
