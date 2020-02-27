import { Component, OnInit } from '@angular/core';
import { InitialService } from './services/initial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  public title = 'Universite';
  public buscadorVisible: boolean;
  public menuVisible: boolean;
  public optionActiva: string;
  public aplicaciones: [];
  public escritorio: any;
  public totalEscritorio: number = 0;
  public foto: any;
  public configuracion: any;

  constructor(private inicialService: InitialService) { }

  ngOnInit() {
    this.buscadorVisible = false;
    this.menuVisible = false;
    this.optionActiva = 'desktop';
    this.getDatosInicio();
  }

  gestionBuscador() {
    this.buscadorVisible = !this.buscadorVisible;
  }

  gestionMenu() {
    this.menuVisible = !this.menuVisible;
  }

  gestionSidenav(option) {
    this.optionActiva = option;
  }

  private getDatosInicio() {
    this.inicialService.getDatosInicio()
      .subscribe((response) => {
        this.aplicaciones = response[0];
        this.configuracion = response[1];
        this.escritorio = response [2];
        this.totalEscritorio = this.escritorio.AplicacionesEscritorio.length;
        this.foto = response [3];
        console.log(response);
      });
  }

}
