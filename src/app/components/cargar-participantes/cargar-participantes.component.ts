import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cargar-participantes',
  templateUrl: './cargar-participantes.component.html',
  styleUrls: ['./cargar-participantes.component.scss']
})
export class CargarParticipantesComponent implements OnInit {
  public data:[][] = [];
  public participante:{
    nombre:string,
    documento:string,
    correo:string,
    telefono:string,
    ganador:number,
    presentar:boolean
  };
  public participantes:any[] = [];
  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

  onFileChange(archivo: any){
    console.log (archivo);
    const target: DataTransfer = <DataTransfer>(archivo.target);
    const reader : FileReader = new FileReader();

    if(target.files.length !== 1)
    throw new Error('Cannot use multiple files');

    reader.onload = (e:any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr,{type:'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = (XLSX.utils.sheet_to_json(ws,{header: 1}));
      console.log(this.data);
      this.cargarParticipantes();
    }
    reader.readAsBinaryString(target.files[0]);
  }

  public cargarParticipantes(){
    for (let row = 1; row < this.data.length; row++) {
      var aux = JSON.parse(JSON.stringify(this.data[row]));

      this.participante = {
        nombre : aux[0],
        correo : aux[1],
        telefono : aux[2],
        documento : aux[3],
        ganador : 0,
        presentar : false
      };
      /**/

      this.participantes.push(this.participante);
    }
    
    console.log(this.participantes);
    this.jugadorService.setJugadores(this.participantes);
  }
}
