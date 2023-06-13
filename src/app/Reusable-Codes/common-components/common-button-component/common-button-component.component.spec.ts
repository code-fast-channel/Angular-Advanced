import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonButtonComponentComponent } from './common-button-component.component';

describe('CommonButtonComponentComponent', () => {
  let component: CommonButtonComponentComponent;
  let fixture: ComponentFixture<CommonButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonButtonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
