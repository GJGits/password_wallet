import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { PasswordStrengthCalculatorService } from '../services/password-strength-calculator.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newCredentials = { password: '', password_confirm: '' };
  passwordRate = 0;
  serverError = "";
  infoMessage = "Set your master password. Store this password in a safe place, if you lose this password you won't be able to recover the other ones in the wallet";

  constructor(private apiService: ApiService, private router: Router, private activeRoute: ActivatedRoute, private passwordStrengthCalculator: PasswordStrengthCalculatorService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['outdated']) {
        this.infoMessage = "Your master password is outdated, you need to update it now in order to procede";
      }
    });
  }

  updatePasswordStrength() {
    this.passwordRate = this.passwordStrengthCalculator.computePasswordStrengthRate(this.newCredentials.password);
  }

  onSubmit(f: NgForm) {
    if (f.form.valid) {
      this.apiService.newCredentials(this.newCredentials.password)?.subscribe((response) => {
        // on success: {status: 200}
        // on error: {status: 500, errorMessage: '....'}
        if (response.status === 200) {
          this.router.navigate(['home']);
        } else {
          this.serverError = response.errorMessage;
        }

      });

    }

  }

}
