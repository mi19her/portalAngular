import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigApi {

  constructor() {
  }

  BACKEND_URL = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/menu';
  PEDIDOS_URL = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/pedido/resumen?fecha=';
  LISTAPEDIDOS_URL = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/pedido/resumen/detalle?fecha=';
  DETAILORDER_URL = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/pedido/';
  GENERALORDER_URL = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/general_nuevo';
  GETDETAILTRUCK = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/vehiculo/';
  LASTUPDATEDHOUR = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/ultimaActualizacionGeneral';
  GETICONCLIENTE = 'https://rans-0006-logos.s3.amazonaws.com/';
  GETPICKING = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/picking/resumen_nuevo/';
  GETDETAILPICKING = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/picking/detalle_nuevo/';
  GETPI = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/picking/historial_nuevo/';
  GET_TEMPERATURE = 'https://ind7hi1g40.execute-api.us-east-1.amazonaws.com/dev1/temperatura/';

}
