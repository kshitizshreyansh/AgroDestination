import { TestBed } from '@angular/core/testing';

import { SellcropsService } from './sellcrops.service';

describe('SellcropsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellcropsService = TestBed.get(SellcropsService);
    expect(service).toBeTruthy();
  });
});
