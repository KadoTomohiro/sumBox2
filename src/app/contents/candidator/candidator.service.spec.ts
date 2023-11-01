import { TestBed } from '@angular/core/testing';

import { CandidatorService } from './candidator.service';

describe('SumBoxService', () => {
  let service: CandidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
