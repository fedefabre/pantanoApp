import { TestBed } from '@angular/core/testing';

import { CoreServiceService } from './core-service.service';

describe('CoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreServiceService = TestBed.get(CoreServiceService);
    expect(service).toBeTruthy();
  });
});
