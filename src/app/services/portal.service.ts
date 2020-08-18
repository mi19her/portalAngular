import { Injectable } from '@angular/core';
import { ConfigApi } from '../../config-api';
import Auth from '@aws-amplify/auth';


@Injectable({
  providedIn: 'root'
})
export class PortalService {

  idCliente: string;

  constructor(public api: ConfigApi) { }

  customFetch = async ({ url, method }) => {
    let token = null;
    const user = await Auth.currentAuthenticatedUser();
    token = user.signInUserSession.idToken.jwtToken;
    const result = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error('error', err));
    return JSON.parse(
      Object.prototype.hasOwnProperty.call(result, 'body') ? result.body : result,
    );
  }

  getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    return attributes;
  }

  getMenu = async () => this.customFetch({
    url: this.api.BACKEND_URL,
    method: 'GET',
  })

  getIconCliente = (id) => {
    const url = `${this.api.GETICONCLIENTE}${id}.png`;
    return url;
  }

 getPedidos = async (date, client) => {
    const dateStr = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ].join('-');
    let url = '';
    if (client === 29874975) {
      url = `${this.api.PEDIDOS_URL}${dateStr}&cliente=29874,29875,97`;
    } else {
      url = `${this.api.PEDIDOS_URL}${dateStr}&cliente=${client}`;
    }
    return this.customFetch({
      url,
      method: 'GET',
    });
  }

 /*
  getListaPedidos = async (date, client) => {
    const dateStr = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ].join('-');
    let url = '';
    if (client === 29874975) {
      url = `${LISTAPEDIDOS_URL}${dateStr}&cliente=29874,29875,97`;
    } else {
      url = `${LISTAPEDIDOS_URL}${dateStr}&cliente=${client}`;
    }
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getDetailsOrder = async (pat, client) => {
    let url = '';
    if (client === 29874975) {
      url = `${DETAILORDER_URL}${pat}?cliente=29874,29875,97`;
    } else {
      url = `${DETAILORDER_URL}${pat}?cliente=${client}`;
    }
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getCheckpoints = async (client) => {
    let url = '';
    if (client === 29874975) {
      url = `${GENERALORDER_URL}?cliente=29874,29875,97`;
    } else {
      url = `${GENERALORDER_URL}?cliente=${client}`;
    }
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getDetailTruck = async (placa, client) => {
    let url = '';
    if (client === 29874975) {
      url = `${GETDETAILTRUCK}${placa}?cliente=29874,29875,97`;
    } else {
      url = `${GETDETAILTRUCK}${placa}?cliente=${client}`;
    }
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getLastUpdateHour = async () => {
    const url = `${LASTUPDATEDHOUR}`;
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getPicking = async (date, client) => {
    const dateStr = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ].join('-');
    let url = '';
    if (client === 29874975) {
      url = `${GETPICKING}29874,29875,97?fecha=${dateStr}`;
    } else {
      url = `${GETPICKING}${client}?fecha=${dateStr}`;
    }
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getDetailPicking = async (pat) => {
    const url = `${GETDETAILPICKING}${pat}`;
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getPi = async (pat) => {
    const url = `${GETPI}${pat}`;
    return customFetch({
      url,
      method: 'GET',
    });
  }

  getGifOnboarding = (gif) => {
    const url = `${GETICONCLIENTE}${gif}.gif`;
    return url;
  }

  getTemperature = (viaje) => {
    const url = `${GET_TEMPERATURE}${viaje}`;
    return customFetch({
      url,
      method: 'GET',
    });
  } */

}
