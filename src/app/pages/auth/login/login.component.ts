import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthServicesService } from '../../../services/auth-services.service';
import { CognitoUser } from '@aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formUser: FormGroup;
  hideRequiredControl = new FormControl(false);
  hide = true;
  load = false;

  constructor(private _build: FormBuilder,
              public auth: AuthServicesService,
              private _router: Router) {
    this.formUser = this._build.group({
      hideRequired: this.hideRequiredControl,
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    }, this.validateUser);
  }

  get emailInput() { return this.formUser.get('username'); }
  get passwordInput() { return this.formUser.get('password'); }

  validateUser(c: AbstractControl): { invalid: boolean } {
    c.get('password').setErrors({ noMatch: true });
    return { invalid: true };
  }


  getEmailInputError(message) {
    if (this.emailInput.hasError('email')) {
      message = 'Usuario incorrecto';
    } else if (this.emailInput.hasError('required')) {
      message = 'Usuario es requerido';
    }
    return message;
  }

  getPasswordInputError(pass) {
    if (this.passwordInput.hasError('required')) {
      pass = 'Contraseña es requerido';
    } else if (this.passwordInput.hasError('noMatch')){
      pass = 'Usuario o contraseña incorecta';
    }
    return pass;
  }

  singnIn() {
    this.load = true;
    this.auth.signIn(this.emailInput.value, this.passwordInput.value)
      .then((user: CognitoUser | any) => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          this.auth.obj = user;
          this._router.navigate(['/auth/first-pass']);
          console.log(user, 'user');
        } else {
          this._router.navigate(['/portal/home']);
        }
      })
      .catch((error: any) => {
        switch (error.message) {
          case 'Incorrect username or password.':
            this.passwordInput.setErrors({ noMatch: true});
            break;
        }
        this.load = false;
        console.log(error, 'error');
      });
  }
}
