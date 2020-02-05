import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nFoto = 0;
  nFoto2 = 0;

  recalculando() {
    if (this.nFoto > 2) {
      this.nFoto = 0;
    } if (this.nFoto < 0) {
      this.nFoto = 2;
    }
  }
    recalculando2() {
      if (this.nFoto2 > 2) {
        this.nFoto2 = 0;
  
      } if (this.nFoto2 < 0) {
        this.nFoto2 = 2;
      }
    }
}
