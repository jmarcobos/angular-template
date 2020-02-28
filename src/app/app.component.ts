import { Component, OnInit } from '@angular/core';
import { InitialService } from './services/initial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  public title = 'Universite';
  public buscadorBoxVisible: boolean = false;
  public buscadorTextVisible: boolean = false;
  public menuBoxVisible: boolean = false;
  public menuTextVisible: boolean = false;
  public optionActiva: string = 'desktop';
  public aplicaciones: [];
  public appFiltradas: any;
  public escritorio: any;
  public totalEscritorio: number = 0;
  public foto: any;
  public configuracion: any;

  constructor(private inicialService: InitialService) { }

  ngOnInit() {
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

  gestionBuscador(option: string) {
    if (this.buscadorBoxVisible) {
      this.buscadorTextVisible = !this.buscadorBoxVisible;
      this.buscadorBoxVisible =  this.buscadorTextVisible
    } else {
      this.buscadorBoxVisible = !this.buscadorBoxVisible;
      setTimeout(() => { this.buscadorTextVisible = this.buscadorBoxVisible }, 500);
    }
    if (option) {
      this.gestionSidenav(option);
    }
  }

  gestionMenu() {
    if (this.menuBoxVisible) {
      this.menuTextVisible = !this.menuBoxVisible;
      this.menuBoxVisible =  this.menuTextVisible
    } else {
      this.menuBoxVisible = !this.menuBoxVisible;
      setTimeout(() => { this.menuTextVisible = this.menuBoxVisible }, 300);
    }
  }

  gestionSidenav(option: string) {
    this.optionActiva = option;
  }

  buscar(busqueda) {     
    console.log(busqueda.target.value);
  }

}
