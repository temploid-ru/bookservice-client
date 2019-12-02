import {TestBed} from '@angular/core/testing';

import {TouchHelperService} from './touch-helper.service';

describe('TouchHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouchHelperService = TestBed.get(TouchHelperService);
    expect(service).toBeTruthy();
  });
});
