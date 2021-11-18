import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {

  @Input() jugadorIn: any;
  constructor() { }

  ngOnInit(): void {
  }
}
