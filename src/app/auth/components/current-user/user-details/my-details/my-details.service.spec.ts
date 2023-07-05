import { TestBed } from '@angular/core/testing';

import { MyDetailsService } from './my-details.service';

describe('MyDetailsService', () => {
  let service: MyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
