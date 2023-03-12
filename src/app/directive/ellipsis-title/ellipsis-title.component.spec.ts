import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisTitleComponent } from './ellipsis-title.component';

describe('EllipsisTitleComponent', () => {
  let component: EllipsisTitleComponent;
  let fixture: ComponentFixture<EllipsisTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllipsisTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
