import { TestBed } from '@angular/core/testing';

import { Guard } from './guard';

describe('GuardService', () => {
  let service: Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
