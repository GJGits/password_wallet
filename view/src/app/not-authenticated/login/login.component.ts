import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-not-logged',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }

  password: string = '';
  serverError: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  signin() {
    this.apiService.signin(this.password)?.subscribe((data) => {
      if (data && data.status === 200) {
        this.router.navigate(['/wallet']);
      }
      if (data && data.status === 500) {
        this.serverError = data.errorMessage;
      }
    });
  }

}
