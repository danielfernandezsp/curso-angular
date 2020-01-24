import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  nombre = "";
  constructor() { }

  pregunta(){
    this.nombre = prompt("¿Cual es tu nombre?");
    document.getElementById('botonNombre').style.visibility = "hidden";
  }

  ngOnInit() {
  }

}
