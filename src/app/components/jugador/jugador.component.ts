import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  public jugador:{
    nombre:string,
    documento: string,
    correo:string,
    telefono:string
  }
  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.jugador = this.jugadorService.getJugadores();
  }

}
