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
  public appFiltradas: any;
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

  gestionBuscador(option: string) {
    this.buscadorVisible = !this.buscadorVisible;
    if (option) {
      this.gestionSidenav(option);
    }
  }

  gestionMenu() {
    this.menuVisible = !this.menuVisible;
  }

  gestionSidenav(option: string) {
    this.optionActiva = option;
  }

  buscar(busqueda) {     
    console.log(busqueda.target.value);
  }

  private getDatosInicio() {
    this.inicialService.getDatosInicio()
      .subscribe((response) => {
        this.aplicaciones = response[0];
        this.appFiltradas = this.aplicaciones;
        this.configuracion = response[1];
        this.escritorio = response [2];
        this.totalEscritorio = this.escritorio.AplicacionesEscritorio.length;
        this.foto = response [3];
        console.log(response);
      });
  }

}
