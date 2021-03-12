import { TestBed } from '@angular/core/testing';

import { ErrorHandelerService } from './error-handeler.service';

describe('ErrorHandelerService', () => {
  let service: ErrorHandelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
