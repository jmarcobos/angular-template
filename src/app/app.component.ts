import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  public title = 'Universite';
  public buscadorVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.buscadorVisible = false;
  }

  gestionBuscador() {
    this.buscadorVisible = !this.buscadorVisible;
  }
}
