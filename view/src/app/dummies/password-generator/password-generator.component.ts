import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  @Output() passwordGenerated = new EventEmitter<string>();

  f = this.fb.group({ 
    secretType: FormControl,
    secretLength: FormControl 
  });

  constructor(private passwordStrengthCalculator: PasswordStrengthCalculatorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.f.get("secretType")?.valueChanges.subscribe((secretType) => {
      this.emitNewSecret(secretType, this.f.get("secretLength")?.value);
    });

    this.f.get("secretLength")?.valueChanges.subscribe((secretLength) => {
      this.emitNewSecret(this.f.get("secretType")?.value, secretLength);
    })
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
