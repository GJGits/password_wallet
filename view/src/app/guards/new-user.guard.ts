import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutoUnsub } from '../decorators/auto-unsub';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

@AutoUnsub()
export class NewUserGuard implements CanActivate {

  newUser$: Subscription = new Subscription();

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.apiService.isNewAccount().pipe(map((data) => {
      if (data.status === 400) {
        return this.router.createUrlTree(['newUser']);
      }
      if (data.status === 205) {
        return this.router.createUrlTree(['update']);
      }
      return true;
    }));

  }

}
