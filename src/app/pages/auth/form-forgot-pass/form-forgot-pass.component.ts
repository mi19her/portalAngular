import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-form-forgot-pass',
  templateUrl: './form-forgot-pass.component.html',
  styleUrls: ['./form-forgot-pass.component.css']
})
export class FormForgotPassComponent implements OnInit {
  email: string;
  formForgot: FormGroup;
  hideRequiredControl = new FormControl(false);
  hide = false;
  load = false;

  get codeInput() { return this.formForgot.get('code'); }
  get newPass() { return this.formForgot.get('newpass'); }
  get confirmPass() { return this.formForgot.get('confirmpass'); }

  constructor(private route: ActivatedRoute,
    private _routing: Router,
    private _build: FormBuilder
  ) {
    this.formForgot = this._build.group({
      hideRequired: this.hideRequiredControl,
      code: [null, [Validators.required, Validators.maxLength(6)]],
      newpass: [null, [Validators.required]],
      confirmpass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-;,:]+$')
      ]))
    }, { validator: this.passwordCheckconfirm });
  }

  passwordCheckconfirm(c: AbstractControl): { invalid: boolean } {
    if (c.get('newpass').value !== c.get('confirmpass').value) {
      c.get('confirmpass').setErrors({ noMatch: true });
      return { invalid: true };
    }
  }

  message() {
    if (this.confirmPass.hasError('noMatch')) {
      return 'Las contraseñas no coinciden';
    }
    if (this.confirmPass.hasError('pattern')) {
      return 'Contraseña insegura, esta contraseña no cumple con los requisitos de una contraseña segura';
    }
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('user');
    console.log(this.email, 'emaillllllll');
  }

  changePass() {
    this.load = true;
    Auth.forgotPasswordSubmit(this.email, this.codeInput.value, this.newPass.value)
      .then(data => {
        console.log(data, 'DATA');
        this._routing.navigate(['/auth/form-firstPass']);
      })
      .catch(err => {
        this.load = false;
        console.log(err);
      });
  }
}
