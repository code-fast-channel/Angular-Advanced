import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValueIndexBasedComponent } from './edit-value-index-based.component';

describe('EditValueIndexBasedComponent', () => {
  let component: EditValueIndexBasedComponent;
  let fixture: ComponentFixture<EditValueIndexBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditValueIndexBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditValueIndexBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
