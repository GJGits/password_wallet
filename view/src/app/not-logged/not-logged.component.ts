import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-not-logged',
  templateUrl: './not-logged.component.html',
  styleUrls: ['./not-logged.component.scss']
})
export class NotLoggedComponent implements OnInit {


  ngOnInit(): void {
  }

  password: string = '';
  serverError: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  signin() {
    this.apiService.signin(this.password)?.subscribe((data) => {
      if (data && data.status === 200) {
        this.router.navigate(['/home']);
      }
      if (data && data.status === 205) {
        this.router.navigate(['/newUser/outdated']);
      }
      if (data && data.status === 500) {
        this.serverError = data.errorMessage;
      }
    });
  }

}
