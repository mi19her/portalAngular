import { Component, OnInit, Input } from '@angular/core';
import { PortalService } from '../../../../services/portal.service';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public getCLiente: PortalService,
              public changeData: UtilService) { }

  @Input() isExpanded: boolean;

  arrayFilter = [];
  isDrop = false;
  name: string;
  id: string;
  cliente: any;
  entries: any;

  ngOnInit(): void {
    this.getCLiente.getMenu()
      .then((result) => {
        const obj = result.Clientes;
        this.name = obj[0].name;
        this.id = obj[0].id;
        const even = (element) => element.grupo === 'CBC';
        if (obj.some(even) === true) {
          if (obj.length > 1) {
            this.arrayFilter.push(...obj, { grupo: 'CBC', id: 29874975, name: 'Todas las sedes' });
          } else {
            this.arrayFilter.push(...obj);
          }
        } else {
          this.arrayFilter.push(...obj);
        }
        this.cliente = this.changeData.normalizeData(this.arrayFilter);
        this.entries = Object.entries(this.cliente);
      });
    console.log(this.getCLiente.idCliente, 'ideeeeeeeeeeeeee');
  }

  toggleGroup = (e, [groupName, group]) => {
    if (group.items.length > 1) {
      this.cliente[groupName].show = !this.cliente[groupName].show;
    } else {
      this.getValue(e, group.items[0]);
    }
  }

  getValue = (e, item) => {
    e.stopPropagation();
    const obj = item;
    this.name = obj.name;
    this.id = obj.id;
    this.getCLiente.idCliente = this.id;
    console.log(this.getCLiente.idCliente, 'ideeeeeeeee');
  }
}
