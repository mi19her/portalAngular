import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PortalComponent } from './portal.component';
import { HomeComponent } from './home/home.component';

import { routing } from './portal.routing';
import { ClientComponent } from './components/client/client.component';
import { SearchComponent } from './components/search/search.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UpdatedPasswordComponent } from './updated-password/updated-password.component';
import { EntregasComponent } from './entregas/entregas.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { PickingComponent } from './picking/picking.component';

@NgModule({
  declarations: [PortalComponent, HomeComponent, ClientComponent, SearchComponent, CalendarComponent,
    ChangePassComponent, UpdatedPasswordComponent, EntregasComponent, SeguimientoComponent, PickingComponent],
  imports: [
    CommonModule,
    routing,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class PortalModule { }
