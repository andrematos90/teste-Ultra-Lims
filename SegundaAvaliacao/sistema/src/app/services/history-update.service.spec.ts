import { TestBed } from '@angular/core/testing';

import { HistoryUpdateService } from './history-update.service';

describe('HistoryUpdateService', () => {
  let service: HistoryUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
