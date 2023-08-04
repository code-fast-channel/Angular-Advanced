import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvamcedReusableTableExampleComponent } from './advamced-reusable-table-example.component';

describe('AdvamcedReusableTableExampleComponent', () => {
  let component: AdvamcedReusableTableExampleComponent;
  let fixture: ComponentFixture<AdvamcedReusableTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvamcedReusableTableExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvamcedReusableTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
