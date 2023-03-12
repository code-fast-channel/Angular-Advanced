import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOnlyDirectiveComponent } from './number-only-directive.component';

describe('NumberOnlyDirectiveComponent', () => {
  let component: NumberOnlyDirectiveComponent;
  let fixture: ComponentFixture<NumberOnlyDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOnlyDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOnlyDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
