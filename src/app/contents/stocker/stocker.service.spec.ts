import { TestBed } from '@angular/core/testing';

import { StockerService } from './stocker.service';

describe('StockerService', () => {
  let service: StockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
