import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrattegyService } from './custom-preload-strattegy.service';

describe('CustomPreloadStrattegyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadStrattegyService = TestBed.get(CustomPreloadStrattegyService);
    expect(service).toBeTruthy();
  });
});
