import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseExampleGeneralComponent } from './reuse-example-general.component';

describe('ReuseExampleGeneralComponent', () => {
  let component: ReuseExampleGeneralComponent;
  let fixture: ComponentFixture<ReuseExampleGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseExampleGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseExampleGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
