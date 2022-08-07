import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-not-logged',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm = this.formBuilder.group({
    password: ['', Validators.required]
  })

  serverError: string | null = '';


  constructor(private router: ActivatedRoute, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap) => {
      if (paramMap && paramMap.has('errorMessage'))
        this.serverError = paramMap.get('errorMessage');
    })
  }

  signin() {
    if (this.signinForm.valid) {
      this.authService.login(this.signinForm.value.password);
    }
  }

}
