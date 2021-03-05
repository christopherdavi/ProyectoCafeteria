import { TestBed } from '@angular/core/testing';

import { LaravelApiService } from './laravel-api.service';

describe('LaravelApiService', () => {
  let service: LaravelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaravelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
