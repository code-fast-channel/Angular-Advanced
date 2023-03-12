import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableDirectiveComponent } from './search-table-directive.component';

describe('SearchTableDirectiveComponent', () => {
  let component: SearchTableDirectiveComponent;
  let fixture: ComponentFixture<SearchTableDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTableDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
