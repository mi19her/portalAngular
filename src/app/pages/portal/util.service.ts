import { Injectable } from '@angular/core';
import { PortalService } from '../../services/portal.service';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor( public getIcon: PortalService ) { }

  itemWithIcon = (item) => {
    return { ...item, icon: this.getIcon.getIconCliente(item.id) };
  }

  normalizeData = (list) => {
    const groups = {};
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const groupName = item.grupo.length > 0 ? item.grupo : item.name;
      if (groups[groupName]) {
        groups[groupName] = {
          ...groups[groupName],
          items: [...groups[groupName].items, this.itemWithIcon(item)]
        };
      } else {
        groups[groupName] = {
          show: false,
          items: [this.itemWithIcon(item)],
        };
      }
    }
    return groups;
  }

  directionsMinuscula = (data) => {
    if (data !== null || data !== undefined) {
      const copia = data;
      let palabra = '';
      let result = '';
      const arr = copia.split(' ');
      arr.map((elem) => {
        if (elem.charAt(1) !== '.') {
          palabra = (elem.charAt(0)).toUpperCase() + (elem.slice(1)).toLowerCase();
        } else {
          palabra = elem;
        }
        result = `${result + palabra} `;
      });
      return (result);
    }
  }

}
