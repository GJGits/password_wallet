import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { ServerResponse } from '../services/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WalletGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.getAuthStatus().pipe(map((authStatus: ServerResponse) => {
      if (authStatus.status === AuthService.AUTH_STATUS.NOT_VALID || authStatus.status === AuthService.AUTH_STATUS.OUTDATED) {
        let redirectTo = this.router.url + "/" + authStatus.errorMessage;
        return this.router.createUrlTree([redirectTo]);
      }
      return true;
    }));
  }
}
