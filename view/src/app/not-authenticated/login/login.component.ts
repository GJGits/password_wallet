import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WithSubscription } from 'src/app/authenticated/interfaces';
import { AutoUnsub } from 'src/app/decorators/auto-unsub';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-not-logged',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@AutoUnsub()
export class LoginComponent extends WithSubscription implements OnInit {

  signinForm = this.formBuilder.group({
    password: ['', Validators.required]
  })

  serverError: string | null = '';

  constructor(
    private router: ActivatedRoute, 
    private authService: AuthService, 
    private formBuilder: FormBuilder
    ) { 
      super();
  }

  ngOnInit(): void {
    this.subscriptions$.push(this.router.paramMap.subscribe((paramMap) => {
      if (paramMap && paramMap.has('errorMessage'))
        this.serverError = paramMap.get('errorMessage');
    }));
  }

  signin() {
    if (this.signinForm.valid) {
      this.authService.login(this.signinForm.value.password);
    }
  }

}
