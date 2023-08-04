import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormForDragDropComponent } from './reusable-form-for-drag-drop.component';

describe('ReusableFormForDragDropComponent', () => {
  let component: ReusableFormForDragDropComponent;
  let fixture: ComponentFixture<ReusableFormForDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableFormForDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormForDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
