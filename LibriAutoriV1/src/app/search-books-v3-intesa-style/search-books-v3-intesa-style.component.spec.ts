import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksV3IntesaStyleComponent } from './search-books-v3-intesa-style.component';

describe('SearchBooksV3IntesaStyleComponent', () => {
  let component: SearchBooksV3IntesaStyleComponent;
  let fixture: ComponentFixture<SearchBooksV3IntesaStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksV3IntesaStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksV3IntesaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
