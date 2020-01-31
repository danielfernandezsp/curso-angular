import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  // Array de tipo string
  cursos: string[] = ['HTML5', 'CSS3', 'SASS', 'Java8'];

  // Array de objetos animales
  animales: Array<any> = [
    { especie: 'perro', nombre: 'Lucia', anios: 8, pelo: 'corto' },
    { especie: 'gato', nombre: 'Felix', anios: 3, pelo: 'corto' },
    { especie: 'gato', nombre: 'Lulu', anios: 5, pelo: 'largo' },
    { especie: 'perro', nombre: 'Pipo', anios: 7, pelo: 'largo' }
  ];

  estudiantes: Array<any> = [];
  tablaEstudiantes: boolean = false;
  ocultar: boolean = true;
  nBoton: string = 'Ocultar';

  constructor() { }

  boton() {
    if (this.ocultar == false) {
      this.nBoton = 'Mostrar';
    } else {
      this.nBoton = 'Ocultar';
    }
  }


  guardar() {
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var edad = (<HTMLInputElement>document.getElementById("edad")).value;
    var curso = (<HTMLInputElement>document.getElementById("curso")).value;

    this.estudiantes.push({ aNombre: nombre, aEdad: edad, aCurso: curso });

    console.log(this.estudiantes);

    if (this.estudiantes.length == 0) {
      this.tablaEstudiantes = false;
    } else {
      this.tablaEstudiantes = true;
    }

  }


  ngOnInit() {

  }

}
