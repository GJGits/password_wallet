import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from '../services/services.module';

import { NewUserGuard } from './new-user.guard';

describe('NewUserGuard', () => {
  let guard: NewUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule]
    });
    guard = TestBed.inject(NewUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
