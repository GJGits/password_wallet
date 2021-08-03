import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthCalculatorService {

  constructor() { }

  computePasswordStrengthRate(password: string): number {
    let rate = 0;
    if (password.length > 8) {
      rate += 5;
    }
    if (/[A-Z]/.test(password)) {
      rate += 1;
    }
    if (/[0-9]/.test(password)) {
      rate += 1;
    }
    if (/[$&!?\-\_]/.test(password)) {
      rate += 2;
    }
    if (/[a-z]/.test(password)) {
      rate += 1;
    }
    return rate;
  }

  ratePasswordValidity(lastUpdateTimestamp: number) {
    let currentDate = new Date();
    let lastUpdateDate = new Date(lastUpdateTimestamp);
    let diffTime = Math.abs(currentDate.getTime() - lastUpdateDate.getTime());
    let diffDays = Math.floor( diffTime / (1000 * 60 * 60 * 24) );
    if (diffDays < 14) {
      return "new";
    }
    else if (diffDays < 28) {
      return "recent";
    }
    else if (diffDays < 42) {
      return "adult";
    }
    return "old";  
  }

  suggestPassword(): string {
    let password = '';
    for (let i = 0; i < 12; i++) {
      let c = Math.floor(Math.random() * (125 - 35 + 1) + 35);
      password += String.fromCharCode(c);
    }
    return password;
  }

  suggestPin(pinLength: number): string {
    let password = '';
    for (let i = 0; i < pinLength; i++) {
      let c = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      password += "" + c;
    }
    return password;
  }
}
