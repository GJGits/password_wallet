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
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

@AutoUnsub()
export class NewUserComponent extends WithSubscription implements OnInit {

  newCredentialsForm = this.formBuilder.group({
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required],
  });
  
  passwordRate = 0;
  serverError: string | null = "";
  infoMessage = "Set your master password. Store this password in a safe place, if you lose this password you won't be able to recover the other ones in the wallet";

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private passwordStrengthCalculator: PasswordStrengthCalculatorService, 
    private formBuilder: FormBuilder) { 
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

  onSubmit() {
    if (this.newCredentialsForm.valid) {
      this.authService.login(this.newCredentialsForm.value.password);
    }

  }


}
