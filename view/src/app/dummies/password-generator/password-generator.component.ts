import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WithSubscription } from 'src/app/authenticated/interfaces';
import { AutoUnsub } from 'src/app/decorators/auto-unsub';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})

@AutoUnsub()
export class PasswordGeneratorComponent extends WithSubscription implements OnInit {

  @Output() passwordGenerated = new EventEmitter<string>();

  f = this.fb.group({ 
    secretType: FormControl,
    secretLength: FormControl 
  });


  constructor(
    private passwordStrengthCalculator: PasswordStrengthCalculatorService, 
    private fb: FormBuilder
    ) { super() }

  ngOnInit(): void {
    
    this.subscriptions$.push(this.f.get("secretType")?.valueChanges.subscribe((secretType) => {
      this.emitNewSecret(secretType, this.f.get("secretLength")?.value);
    })!);

    this.subscriptions$.push(this.f.get("secretLength")?.valueChanges.subscribe((secretLength) => {
      this.emitNewSecret(this.f.get("secretType")?.value, secretLength);
    })!);
  }

  emitNewSecret(secretType: string, secretLength: number) {

    let newSecret = "";
      
      if (secretType === 'password') {
        newSecret = this.passwordStrengthCalculator.suggestPassword(secretLength);
      }
      
      if (secretType === "pin") {
        newSecret = this.passwordStrengthCalculator.suggestPin(secretLength);
      }
      
      this.passwordGenerated.emit(newSecret);

  }

}
