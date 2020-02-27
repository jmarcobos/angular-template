import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'EAAAAJfISXoXHzsuZ06GFswbS214qRCcC3F+NV3R00chNsV7aTKbeoLv8AVKbKIE6fIyDKrAc7E3wpw2UFu7Rp/AFvPajabkS4K4hXGzUvgnmEkt4f5CL8DobRFyIVi5s5BRlSG02NDR6p0wCoaziu18LUM='
    })
  };

  private _envAPI: string = "https://apides.umh.es/";

  private URL_APLICACIONES: string = this._envAPI + "universite/v1/Aplicaciones";
  private URL_CONFIGURACIONES: string = this._envAPI + "universite/v1/Configuraciones";
  private URL_ESCRITORIO = this._envAPI + "universite/v1/Escritorios/Defecto";
  private URL_FOTO = this._envAPI + "fotopersona/v1/Fotos";

  constructor(private http: HttpClient) {
  }

  getDatosInicio(): Observable<any> {
    return forkJoin([
      this.http.get<any>(this.URL_APLICACIONES, this.httpOptions),
      this.http.get<any>(this.URL_CONFIGURACIONES, this.httpOptions),
      this.http.get<any>(this.URL_ESCRITORIO, this.httpOptions),
      this.http.get<any>(this.URL_FOTO, this.httpOptions)
    ]);
  }

  getAplicaciones(): Observable<any> {
    return this.http.get<any>(this.URL_APLICACIONES, this.httpOptions);
  }

  getConfiguracion(): Observable<any> {
    return this.http.get<any>(this.URL_CONFIGURACIONES, this.httpOptions);
  }

}
