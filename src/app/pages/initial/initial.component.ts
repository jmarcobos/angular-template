import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.less']
})
export class InitialComponent implements OnInit {

  public buscadorVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.buscadorVisible = true;
  }

  gestionBuscador() {
    this.buscadorVisible = !this.buscadorVisible;
  }

}
