import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {

  constructor(private jugadorService: JugadorService) { }
  public participantes:any[];

  ngOnInit(): void {
    this.participantes = this.jugadorService.getJugadores();
  }

}
