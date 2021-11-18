import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public start:boolean;
  public participantes:any[];
  public valorSeleccionado:number;
  public seleccionado:any;
  public presentarCantidad: boolean;
  constructor(private jugadorService : JugadorService) { }

  ngOnInit(): void {
    this.cargarParticipantes();
  }

  public cargarParticipantes(){
    this.participantes = this.jugadorService.getJugadores();
  }

  public selecionarJugador(){
    this.start = true;
    this.valorSeleccionado = Math.floor(Math.random()*(this.participantes.length));
    this.seleccionado = this.participantes[this.valorSeleccionado];
  }
  
  public marcarGanador(){
    this.start = false;
    this.participantes[this.valorSeleccionado].ganador += 1;
    this.participantes[this.valorSeleccionado].presentar = true;
    alert('Se marco el ganador');
  }


}
