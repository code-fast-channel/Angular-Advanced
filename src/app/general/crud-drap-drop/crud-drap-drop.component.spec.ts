import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDrapDropComponent } from './crud-drap-drop.component';

describe('CrudDrapDropComponent', () => {
  let component: CrudDrapDropComponent;
  let fixture: ComponentFixture<CrudDrapDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDrapDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDrapDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
