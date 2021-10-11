import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksV2ByAuthors } from './search-by-author.component';

describe('SearchBooksV2ByAuthors', () => {
  let component: SearchBooksV2ByAuthors;
  let fixture: ComponentFixture<SearchBooksV2ByAuthors>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksV2ByAuthors ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksV2ByAuthors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
