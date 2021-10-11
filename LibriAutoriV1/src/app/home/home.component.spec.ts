import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksV1 } from './search-books-v1.component';

describe('SearchBooksV1', () => {
  let component: SearchBooksV1;
  let fixture: ComponentFixture<SearchBooksV1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksV1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
