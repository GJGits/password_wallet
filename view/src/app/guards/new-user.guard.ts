import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.apiService.isNewAccount().subscribe((data) => {
      if (data.status === 400) {
        this.router.navigate(['newUser']);
      }
      if (data.status === 205) {
        this.router.navigate(['newUser', 'outdated']);
      }
    });

    return true;
  }

}
