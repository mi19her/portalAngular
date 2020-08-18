import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthServicesService } from '../../../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {

  formForgot: FormGroup;
  hideRequiredControl = new FormControl(false);
  load = false;

  constructor(private _build: FormBuilder,
              private _router: Router,
              private service: AuthServicesService) {
    this.formForgot = this._build.group({
      hideRequired: this.hideRequiredControl,
      email: [null, [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") ]]
    });
  }
  get emailInput() { return this.formForgot.get('email'); }

  getMessageError() {
    if (this.emailInput.hasError('email')){
      return 'Usuario incorecto';
    }
    if (this.emailInput.hasError('pattern')){
      return 'Usuario incorecto';
    }
  }

  sendCode() {
    this.load = true;
    this.service.forgot(this.emailInput.value)
      .then(() => {
       this._router.navigate(['auth/form-forgotPass', this.emailInput.value]);
      }).catch((error: any) => {
        console.log(error, 'err');
        this.load = false;
      });
  }
}
