import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WithSubscription } from 'src/app/authenticated/interfaces';
import { AutoUnsub } from 'src/app/decorators/auto-unsub';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service';
import { PasswordStrengthCalculatorService } from '../../services/password-strength-calculator.service';

@Component({
  selector: 'app-renew',
  templateUrl: './updateMasterPassword.component.html',
  styleUrls: ['./updateMasterPassword.component.scss']
})

@AutoUnsub()
export class UpdateMasterPasswordComponent extends WithSubscription implements OnInit {

  infoMessage = "Your master key is outdated, you need to updated in order to proceed";
  newCredentialsForm = this.formBuilder.group({
    oldPassword: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required],
  });
  passwordRate = 0;
  serverError: string | null = "";
  error$: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private apiService: ApiService, 
    private router: Router, 
    private passwordStrengthCalculator: PasswordStrengthCalculatorService, 
    private authService: AuthService) { 
      super();
    }

  ngOnInit(): void {
    this.subscriptions$.push(this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap && paramMap.has('errorMessage'))
        this.serverError = paramMap.get('errorMessage');
    }));
  }

  updatePasswordStrength() {
    this.passwordRate = this.passwordStrengthCalculator.computePasswordStrengthRate(this.newCredentialsForm.value.password);
  }

  updateMasterPassword() {
    if (this.newCredentialsForm.valid) {
      this.authService.updateMasterKey(this.newCredentialsForm.value.oldPassword, this.newCredentialsForm.value.password);
    }
  }

}
