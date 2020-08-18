import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './home/home.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UpdatedPasswordComponent } from './updated-password/updated-password.component';
import { EntregasComponent } from './entregas/entregas.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { PickingComponent } from './picking/picking.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            { path: '', redirectTo: 'home'},
            { path: 'home', component: HomeComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
            { path: 'change', component: ChangePassComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
            { path: 'updatedPassword', component: UpdatedPasswordComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
            { path: 'entrega', component: EntregasComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
            { path: 'seguimiento', component: SeguimientoComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
            { path: 'picking', component: PickingComponent, data: { title: ':: Home :: PortalR360 :: RANSA ::' } },
        ]
    },
];

export const routing = RouterModule.forChild(routes);
