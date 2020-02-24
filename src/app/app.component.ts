import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  public title = 'Universite';
  public buscadorVisible: boolean;
  public menuVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.buscadorVisible = false;
    this.menuVisible = false;
  }

  gestionBuscador() {
    this.buscadorVisible = !this.buscadorVisible;
  }

  gestionMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
