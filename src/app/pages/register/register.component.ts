import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './register.component.html',
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
export class RegisterComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  confirmPassword = new FormControl('', [
    Validators.required
  ]);
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])
  registerForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    name: this.name
  });
  code: string = '';
  formStatus: string = 'login';

  constructor(private builder: FormBuilder) { }

  checkPasswords() {
    let password = this.registerForm.get('password');
    let confirmPassword = this.registerForm.get('confirmPassword');
    if (password.value == confirmPassword.value) {
      return null
    } else {
      confirmPassword.setErrors({ same: true });
    }
  }

  login() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    this.formStatus = 'email';
  }

  checkEmail() {
    this.formStatus = 'success';
  }
}
