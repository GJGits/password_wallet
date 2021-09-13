import { TestBed } from '@angular/core/testing';

import { PasswordStrengthCalculatorService } from './password-strength-calculator.service';

describe('PasswordStrengthCalculatorService', () => {
  let service: PasswordStrengthCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordStrengthCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
