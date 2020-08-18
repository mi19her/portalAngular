import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../services/portal.service';
import Auth from '@aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  menuConfig = {
    tracking: {
      route: '/portal/entrega',
      icon: 'local_shipping',
      label: 'Avance de entregas',
    },
    seguimiento: {
      route: '/portal/seguimiento',
      icon: 'pin_drop',
      label: 'Seguimiento en linea',
    },
    pedidos: {
      route: '/portal/picking',
      icon: 'assignment_returned',
      label: 'Avance de picking',
    },
    inventarios: {
      route: '/portal/dashboard',
      icon: 'poll',
      label: 'Indicadores de gestión',
    },
  };

  constructor(public getMenu: PortalService,
              public route: Router) { }

  isExpanded = false;
  listMenu = [];
  public config: any;
  public iconUrl = '';
  public firstName = '';
  public familyName = '';
  public email = '';

  ngOnInit(): void {
    this.getMenu.getMenu()
      .then((result) => {
        this.listMenu = result.Menu;
        console.log(this.listMenu, 'menuuu');
        this.config = this.listMenu.map(e => {
          return this.menuConfig[e];
        });
      });
    this.getMenu.getUser()
      .then((user) => {
        console.log(user, 'infoooooo');
        this.firstName = user.name;
        this.familyName = user.family_name;
        this.email = user.email;
      });
  }

  signOut = () => {
    Auth.signOut({ global: true })
      .then(() => {
        this.route.navigate(['/auth/login']);
      })
      .catch((err) => console.log(err));
  }
}
