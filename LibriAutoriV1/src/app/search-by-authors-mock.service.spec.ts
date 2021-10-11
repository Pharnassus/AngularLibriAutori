import { TestBed } from '@angular/core/testing';

import { SearchByAuthorsMockService } from './search-by-authors-mock.service';

describe('SearchByAuthorsMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchByAuthorsMockService = TestBed.get(SearchByAuthorsMockService);
    expect(service).toBeTruthy();
  });
});
