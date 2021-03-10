import { TestBed } from '@angular/core/testing';

import { DataCategoriaService } from './data-categoria.service';

describe('DataCategoriaService', () => {
  let service: DataCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
