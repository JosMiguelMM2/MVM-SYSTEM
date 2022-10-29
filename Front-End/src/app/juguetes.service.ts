import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class JuguetesService {
  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    //console.log("22    ");
    let body = JSON.parse('' + res);
    //console.log("23 A " + body);
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //console.log(" ggggg ");
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //  SERVICIO DE Contactos

  // Método Listar contactos

  getTipContacs(): Observable<any> {
    console.error(' antes ' + this.Url + '/tipContac');
    return this.http.get(this.Url + '/tipContac', httpOptions);
  }

  //-------------------------------------------------------------
  // Método mostrar un solo contacto

  getTipContac(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    return this.http.get(this.Url + '/tipContac' + id, httpOptions);
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo Tipo de documento

  async insertTipContac(NuevoContacto: any): Promise<any> {
    //console.log(TipDocD, this.Url+"/tipdoc")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + '/tipContac', NuevoContacto, httpOptions).toPromise();
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un  Contacto

  async updateTipContac(cadena: any): Promise<any> {
    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipContac', cadena, httpOptions).toPromise();
    });
  }

  //------------------------------------------------------------------
  // servicio crud Empleados
  // metodo listar tipos de documentos
  getEmpleados(): Observable<any> {
    return this.http.get(this.Url + '/tipEmpleado', httpOptions);
  }
  //mostrar un solo Empleado
  getTipEmpleado(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    console.log(this.Url + '/tipEmpleado' + id);
    return this.http.get(this.Url + '/tipEmpleado' + id, httpOptions);
  }
  //insertar nuevo Empleado
  async insertTipEmpleado(TipEmpleados: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipEmpleado', TipEmpleados, httpOptions)
        .toPromise();
    });
  }
  // metodo modificar empleado
  async updateTipEmpleado(cadena: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipEmpleado', cadena, httpOptions).toPromise();
    });
  }
}
