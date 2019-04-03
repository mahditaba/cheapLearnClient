import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Api } from '../../api';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './login.component.html',
  styles: [`
    .vazir-font {
      font-family: vazirFont;
    }
    .input-danger:focus {
      border-color: #ff386a;
    }
    .input-danger {
      border-color: #ff386a;
    }
    .ng-touched.input-success:focus {
      border-color: #00d977;
    }
    .ng-touched.input-success {
      border-color: #00d977 !important;
    }
  `]
})
export class LoginComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }

  login() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    Api.login(this.loginForm.value.email, this.loginForm.value.password, (reponse)=> {
      let data = JSON.parse(reponse);
      console.log(data);
    });
  }
}
