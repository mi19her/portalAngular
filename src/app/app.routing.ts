import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
    { path: 'portal', loadChildren: () => import('./pages/portal/portal.module').then(m => m.PortalModule) }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { useHash: false });
