import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { PasswordStrengthCalculatorService } from '../../services/password-strength-calculator.service';

@Component({
  selector: 'app-renew',
  templateUrl: './updateMasterPassword.component.html',
  styleUrls: ['./updateMasterPassword.component.scss']
})
export class UpdateMasterPasswordComponent implements OnInit {

  infoMessage = "Your master key is outdated, you need to updated in order to proceed";
  newCredentials = { oldPassword: "", password: "", password_confirm: "" };
  passwordRate = 0;
  serverError = "";

  constructor(private apiService: ApiService, private router: Router, private passwordStrengthCalculator: PasswordStrengthCalculatorService) { }

  ngOnInit(): void {
  }

  updatePasswordStrength() {
    this.passwordRate = this.passwordStrengthCalculator.computePasswordStrengthRate(this.newCredentials.password);
  }

  onSubmit(f: NgForm) {
    if (f.form.valid) {
      this.apiService.signin(this.newCredentials.oldPassword)?.subscribe((response) => {
        // on success: {status: 200}
        // on error: {status: 500, errorMessage: '....'}
        console.log("signin response:", response);
        if (response.status === 200) {
          this.apiService.newCredentials(this.newCredentials.password)?.subscribe((response) => {
            console.log("newCred response:", response);
            if (response.status === 200) {
              this.router.navigate(["wallet"]);
            } else {
              this.serverError = response.errorMessage;
            }
          })
        } else {
          this.serverError = response.errorMessage;
        }

      });

    }
  }

}
