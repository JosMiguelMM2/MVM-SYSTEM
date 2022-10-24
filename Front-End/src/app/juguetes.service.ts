import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
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

  // Método Listar de los Tipos de documentos
  
  getTipContacs(): Observable<any> {
    console.error(" antes "+ this.Url + '/tipContac');
    return this.http.get(this.Url + '/tipContac', httpOptions);
   
  }

  //-------------------------------------------------------------
  // Método mostrar un solo Tipo de documento

  getTipContac(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    return this.http.get(this.Url + '/tipContac' + id, httpOptions);
  }
}
