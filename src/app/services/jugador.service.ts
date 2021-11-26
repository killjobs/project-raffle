import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  public participantes: any[]= [];

  constructor() { }

  setJugadores(participantes:any[]){
    this.participantes = participantes;
  }

  getJugadores(){
    return this.participantes;/*[
      {
        nombre:'Julian David Gil',
        documento: '158976542',
        correo:'jdgm_dddsi@yahoo.com',
        telefono:'3955266874',
        ganador:0,
        presentar:false
      },
      {
        nombre:'Karen Yopasa',
        documento: '589632554',
        correo:'kyesyopas@yahoo.com',
        telefono:'552214458',
        ganador:0,
        presentar:false
      },
      {
        nombre:'Sara Isabella Gil',
        documento: '102350568',
        correo:'sarIsG@yahoo.com',
        telefono:'1155040',
        ganador:0,
        presentar:false
      },
      {
        nombre:'Ross Martinez',
        documento: '89654123',
        correo:'rossMarti@yahoo.com',
        telefono:'59663214',
        ganador:0,
        presentar:false
      }]*/
  }
  getJugador(){
    return this.participantes[0];/*{
        nombre:'Julian David Gil',
        documento: '158976542',
        correo:'jdgm_dddsi@yahoo.com',
        telefono:'3955266874',
        ganador:0,
        presentar:false*/
    }
}
