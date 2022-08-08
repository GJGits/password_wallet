import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { ServerResponse } from './interfaces';

enum AUTH_STATUS {
  VALID = 200,
  OUTDATED = 205,
  NEW_ACCOUNT = 400,
  NOT_VALID = 500
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus = new ReplaySubject<ServerResponse>();
  static AUTH_STATUS = AUTH_STATUS;

  constructor(private apiService: ApiService, private router: Router) { }

  isNewAccount() {
    this.apiService.isNewAccount().subscribe((serverResponse) => {
      this.setStatusAndRedirect(serverResponse, "login");
    });
  }

  login(password: string) {
    this.apiService.signin(password)?.subscribe((serverResponse) => {
      this.setStatusAndRedirect(serverResponse, "wallet");
    });
  }

  updateMasterKey(oldPassword: string, newPassword: string) {
    this.apiService.newCredentials(oldPassword, newPassword)?.subscribe((serverResponse) => {
      this.setStatusAndRedirect(serverResponse, "wallet");
    });
  }

  private setStatusAndRedirect(serverResponse: any, nextLocation: string) {
    this.authStatus.next(serverResponse);
    this.router.navigate([nextLocation]);
  }

  getAuthStatus() {
    return this.authStatus;
  }


}
