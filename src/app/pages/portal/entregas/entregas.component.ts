import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PortalService } from '../../../services/portal.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  fecha = new Date();
  obj: any;

  constructor(public getPedidos: PortalService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getPedidos.getPedidos(this.fecha, '97')
    .then((pedidos) => {
      this.obj = pedidos;
      console.log(this.fecha, this.getPedidos.idCliente, 'ideclinteee');
    })
    .catch((err) => console.log(err, 'error'));
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'N° 874563217', weight: 'Entrega parcial', symbol: ''},
  {position: 2, name: 'N° 874332617', weight: 'Entrega completa', symbol: 'He'},
  {position: 3, name: 'N° 368365365', weight: 'Programado', symbol: 'Li'},
  {position: 4, name: 'N° 395937559', weight: 'Rechazado', symbol: 'Be'},
  {position: 5, name: 'N° 365936596', weight: 'Entrega parcial', symbol: 'B'},
  {position: 6, name: 'N° 693694635', weight: 'Entrega parcial', symbol: 'C'},
  {position: 7, name: 'N° 836856836', weight: 'Entrega completa', symbol: 'N'},
  {position: 8, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'O'},
  {position: 9, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'F'},
  {position: 10, name: 'N° 874563217n', weight: 'Entrega completa', symbol: 'Ne'},
  {position: 11, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'Na'},
  {position: 12, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'Mg'},
  {position: 13, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'Al'},
  {position: 14, name: 'N° 874563217', weight: 'Entrega completa', symbol: 'Si'},
];
