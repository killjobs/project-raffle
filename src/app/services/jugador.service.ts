import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }

  getJugadores(){
    return {
      nombre:'Julian David Gil',
      documento: '1019087634',
      correo:'jdgm_1993@yahoo.com',
      telefono:'3192945136'
    }
  }
}
