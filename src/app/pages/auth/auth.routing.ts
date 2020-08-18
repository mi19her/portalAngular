import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormForgotPassComponent } from './form-forgot-pass/form-forgot-pass.component';
import { FirstPassComponent } from './first-pass/first-pass.component';
import { FormFirstPassComponent } from './form-first-pass/form-first-pass.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent, data: { title: ':: Login :: PortalR360 :: RANSA ::' } },
            { path: 'forgot-pass', component: ForgotPassComponent, data: { title: ':: Login :: PortalR360 :: RANSA ::' } },
            { path: 'form-forgotPass/:user', component: FormForgotPassComponent, data: { title: ':: Login :: PortalR360 :: RANSA ::' } },
            { path: 'first-pass', component: FirstPassComponent, data: { title: ':: Login :: PortalR360 :: RANSA ::' } },
            { path: 'form-firstPass', component: FormFirstPassComponent, data: { title: ':: Login :: PortalR360 :: RANSA ::' } }
        ]
    },
];

export const routing = RouterModule.forChild(routes);
