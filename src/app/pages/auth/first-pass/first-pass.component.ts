import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../../services/auth-services.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-first-pass',
  templateUrl: './first-pass.component.html',
  styleUrls: ['./first-pass.component.css']
})
export class FirstPassComponent implements OnInit {
  formPass: FormGroup;
  hideRequiredControl = new FormControl(false);
  hide = false;
  load = false;

  get inputNewPass() {return this.formPass.get('newPass'); }
  get inputConfirmPass() {return this.formPass.get('confirmNewPass'); }

  constructor(private route: Router,
              private service: AuthServicesService,
              private build: FormBuilder) {
    this.formPass = this.build.group({
      hideRequired: this.hideRequiredControl,
      newPass: [null, [Validators.required]],
      confirmNewPass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-;,:]+$')
      ]))
    }, {validator: this.comparePass});
  }

  comparePass(b: AbstractControl): {invalid: boolean} {
    if (b.get('newPass').value !== b.get('confirmNewPass').value) {
        b.get('confirmNewPass').setErrors({match: true});
        return {invalid: true};
    }
  }

  message() {
    if (this.inputConfirmPass.hasError('match')){
      return 'Las contraseñas no coinciden';
    } else if (this.inputConfirmPass.hasError('pattern')){
      return 'Contraseña insegura, esta contraseña no cumple con los requisitos de una contraseña segura';
    }
  }
  ngOnInit(): void {
    console.log(this.service.obj, 'objetooo');
  }

  firstPass() {
    this.load = true;
    this.service.firstpass(this.service.obj, this.inputNewPass.value )
    .then((data) => {
      console.log(data, 'firstttt');
      this.route.navigate(['/auth/form-firstPass']);
    })
    .catch(err => {
      console.log(err);
      this.load = false;
    });
  }

}
