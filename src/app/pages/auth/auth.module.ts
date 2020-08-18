import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormForgotPassComponent } from './form-forgot-pass/form-forgot-pass.component';
import { FirstPassComponent } from './first-pass/first-pass.component';
import { FormFirstPassComponent } from './form-first-pass/form-first-pass.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    AuthComponent,
    ForgotPassComponent,
    FormForgotPassComponent,
    FirstPassComponent,
    FormFirstPassComponent
],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AmplifyAngularModule,
    MaterialModule,
  ]
})
export class AuthModule { }
