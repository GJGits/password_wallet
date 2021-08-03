import { Component, Input, OnInit } from '@angular/core';
import { Secret } from 'src/app/services/interfaces';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  @Input()
  secret = <Secret>{};
  passRate = 0;
  passValidityImageMap = new Map([
    ["new", "txt-blue"],
    ["recent", "txt-green"],
    ["adult", "txt-yellow"],
    ["old", "txt-red"]
  ]);
  validity = '';

  constructor(private passwordStrengthService: PasswordStrengthCalculatorService) { 
  }

  ngOnInit(): void {
    this.passRate = this.passwordStrengthService.computePasswordStrengthRate(this.secret.value);
    this.validity = this.passwordStrengthService.ratePasswordValidity(+this.secret.lastUpdate);
  }

}
