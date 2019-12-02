import {TestBed} from '@angular/core/testing';

import {TablesMapService} from './tables-map.service';

describe('TablesMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablesMapService = TestBed.get(TablesMapService);
    expect(service).toBeTruthy();
  });
});
