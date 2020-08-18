import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {
  formChange: FormGroup;
  hideRequiredControl = new FormControl(false);
  hide = true;
  load = false;

  constructor(private build: FormBuilder,
              private router: Router) {
    this.formChange = this.build.group({
      hideRequired: this.hideRequiredControl,
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmNewPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-;,:]+$')
      ]))
    }, {validator: this.validatePass});
  }

  get oldPassInput() { return this.formChange.get('oldPassword'); }
  get newPassInput() { return this.formChange.get('newPassword'); }
  get confirmNewPassInput() { return this.formChange.get('confirmNewPassword'); }

  validatePass(c: AbstractControl): { invalid: boolean } {
    if (c.get('newPassword').value !== c.get('confirmNewPassword').value) {
      c.get('confirmNewPassword').setErrors({ noMatch: true });
      return { invalid: true };
    }
  }

  message() {
    if (this.confirmNewPassInput.hasError('noMatch')) {
      return 'Las contraseñas no coinciden';
    }
    if (this.confirmNewPassInput.hasError('pattern')) {
      return 'Contraseña insegura, esta contraseña no cumple con los requisitos de una contraseña segura';
    }
  }

  changePass = () => {
    this.load = true;
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('user', user);
        return Auth.changePassword(user, this.oldPassInput.value, this.newPassInput.value);
      })
      .then(data => {
        console.log(data, 'DATA');
        this.router.navigate(['/portal/updatedPassword']);
      })
      .catch(err => {
        this.load = false;
        console.log(err);
      });
  }

}
