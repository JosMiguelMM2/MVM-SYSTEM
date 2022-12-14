import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class JuguetesService {
  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

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
    console.log("tales 60  " + cadena.Id_contactos + " - " + cadena.Id_empleados + " - " + cadena.Tipo_contacto + " - " + cadena.Dato_contacto)
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipContac', cadena, httpOptions).toPromise();
    });
  }


  // Método Listar Empaque

  getTipEmpaques(): Observable<any> {
    console.error(' antes ' + this.Url + '/tipEmpaque');
    return this.http.get(this.Url + '/tipEmpaque', httpOptions);
  }

  //-------------------------------------------------------------
  // Método mostrar un solo empaque

  getTipEmpaque(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    return this.http.get(this.Url + '/tipEmpaque' + id, httpOptions);
  }

  //INSERTAR NUEVO EMPAQUE
  async insertTipEmpaque(NuevoEmpaque: any): Promise<any> {
    console.log("id" + NuevoEmpaque.Id_Empaque + "nombre" + NuevoEmpaque.tipo_de_empaque + "descripcion" + NuevoEmpaque.Juguete + "ultimo dato" + NuevoEmpaque.Persona);
    return new Promise((resolve, reject) => {
      this.http.post(this.Url + '/tipEmpaque', NuevoEmpaque, httpOptions).toPromise();
    });
  }

  //MODIFICAR EMPAQUE
  async updateTipEmpaque(cadena: any): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipEmpaque', cadena, httpOptions).toPromise();
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

  ///////////////catalogo
  //---lista total

  getTipCatalogos(): Observable<any> {
    return this.http.get(this.Url + '/tipCatalogo', httpOptions);
  }

////-------lista catalogos
  getTipCatalogoE(tip: any): Observable<any> {
    return this.http.get(this.Url + '/tipCatalogo' + tip, httpOptions);
  }

  //insertar nuevo Catalogo
  async insertTipCatalogo(TipCatalogo: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipCatalogo', TipCatalogo, httpOptions)
        .toPromise();
    });
  }

// metodo modificar Catalogo
  async updateTipCatalogo(cadena: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipCatalogo', cadena, httpOptions).toPromise();
    });
  }

  //mostrar un solo Jugute
  getTipCatalogosa(id: any): Observable<any> {

    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    console.log(this.Url + '/tipCatalogo/ct' + id)
    return this.http.get(this.Url + '/tipCatalogo/ct' + id, httpOptions);
  }

  /// JUGUETES********************************************
  getTipJuguetess(): Observable<any> {
    return this.http.get(this.Url + '/tipJuguete', httpOptions);
  }

  //mostrar un solo Jugute
  getTipJuguetes(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    console.log(this.Url + '/tipJuguete' + id)
    return this.http.get(this.Url + '/tipJuguete' + id, httpOptions);
  }

  //insertar nuevo Juguete
  async insertTipJuguete(TipJuguete: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipJuguete', TipJuguete, httpOptions)
        .toPromise();
    });
  }

  // metodo modificar Juguete
  async updateTipJugute(cadena: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipJuguete', cadena, httpOptions).toPromise();
    });
  }

  //materiales *****************************************
  getTipMateriales(): Observable<any> {
    return this.http.get(this.Url + '/tipMaterial', httpOptions);
  }

  //mostrar un solo material
  getTipMaterial(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    console.log(this.Url + '/tipMaterial' + id)
    return this.http.get(this.Url + '/tipMaterial' + id, httpOptions);
  }

  //insertar nuevo Material
  async insertTipMaterial(TipMaterial: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipMaterial', TipMaterial, httpOptions)
        .toPromise();
    });
  }

  // metodo modificar Material
  async updateTipMaterial(cadena: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipMaterial', cadena, httpOptions).toPromise();
    });
  }

  //materiales-juguete *****************************************
  getTipMaterialJuguetes(): Observable<any> {
    return this.http.get(this.Url + '/tipMaterialJuguete', httpOptions);
  }

  //mostrar un solo material
  getTipMaterialJuguete(id: any): Observable<any> {
    // console.log("  4555  ***** "+this.Url + "/tipContac"+id )
    // console.log("211    ");
    console.log(this.Url + '/tipMaterialJuguete' + id)
    return this.http.get(this.Url + '/tipMaterialJuguete' + id, httpOptions);
  }

  //insertar nuevo MaterialeJuguetes
  async insertTipMaterialJuguete(TipMateJuguet: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipMaterialJuguete', TipMateJuguet, httpOptions).toPromise();
    });
  }

  //ACTUALIZAR MATERIAL JUGUETE
  async updateTipMateralJuguete(cadena: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipMaterialJuguete', cadena, httpOptions).toPromise();
    });
  }

  //metodo mostrar PRODUCCION
  getTipProJuguetes(): Observable<any> {
    return this.http.get(this.Url + '/tipProJuguete', httpOptions);
  }

  //BUSCAR POR ID getTipProJuguetei
  getTipProJuguetei(id: any): Observable<any> {
    console.log(this.Url + '/tipProJuguete' + id)
    return this.http.get(this.Url + '/tipProJuguete' + id, httpOptions);
  }

  //INSERTAR PRODUCCION
  async insertTipProJuguete(Produccion: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + '/tipProJuguete', Produccion, httpOptions).toPromise();
    });
  }

  //ACTUALIZAR PRODUCCION
  async updateTipProJuguete(CadenaActualizacionP: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + '/tipProJuguete', CadenaActualizacionP, httpOptions).toPromise();
    });
  }

  //mostrar informes materiales
  getTipInforme2(FechaIni: any, FechaFin: any): Observable<any> {
    console.log(this.Url + '/tipMaterial' + FechaIni + "/" + FechaFin)
    return this.http.get(this.Url + "/tipMaterial/" + FechaIni + "/" + FechaFin, httpOptions);
  }
  //mostrar informe POR ID produccion
  getInformeProduID(FechaIni:any,FechaFin:any,id:any): Observable <any>{
    return this.http.get(this.Url+"/tipProJuguete/"+FechaIni+"/"+FechaFin+"/"+id, httpOptions);
}

  //MOSTRAR INFORME CANTIDAD PRODUCCIDA
  getTipProJuguete(id: any, FechaInicio:any,FechaFinal:any): Observable<any> {
    return this.http.get(this.Url + '/tipProJuguete' +"/"+ id +"/"+FechaInicio+"/"+FechaFinal, httpOptions);
  }
}
