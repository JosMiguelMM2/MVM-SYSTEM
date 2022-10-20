import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  private Url: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  

  private extractData(res: Response) 
  {
    //console.log("22    ");
     let body = JSON.parse('' + res);
     //console.log("23 A " + body);
     return body || {};
   }
 
 
 
   private handleError<T>(operation = 'operation', result?: T) 
   { 
         //console.log(" ggggg ");
      return (error: any): Observable<T> => {
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T)

    };
   }

  //  SERVICIO DE Contactos

  //  MOSTRAR TODOS LOS CONTACTOS

  getTipContacs(): Observable<any>
  {

    return this.http.get(this.Url + "tipContac" , httpOptions);
   
  }

}
