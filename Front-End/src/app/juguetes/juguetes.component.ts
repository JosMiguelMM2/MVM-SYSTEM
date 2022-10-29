import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service'

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.css']
})
export class JuguetesComponent implements OnInit {
  title = "MANEJO DE JUGUETES";
  
  TipJuguete: any =[];               //Lista de Tipos de Empleado
  TituloJuguete: any=[];          //Titulo Lista de Tipos de Empleado
  tablaJuguete: any=[];           //Encabezados tabla Lista de Tipos de Empleado

  MiTipJuguete: any = [];             //Tipo de Documento Buscado
  TituloTipJuguete = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipJuguete: any = [];        //Encabezados tabla Tipo de Documento Buscado 
  comboListaTipJuguete: any = [];     //Combo Buscar Tipo de Documento

  TituloTipJugueteEdit = "";          //Titulo de Tipo de Documento a Editar
  MiTipJugueteE: any = [];            //Tipo de Documento a Editar
  comboEditarTipJuguete: any = [];    //Combo Editar Tipo de Documento

  controlLista = 1;               //Control para limpiar la lista
  BuscarEvalor = 1;               //Control para carga del valor a buscar

  //*****************************************************************************
 //Form group 
 ListaJuguetes = new FormGroup( 
  { 

} );


  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router
  ) { }
//..............................................................................................
// CRUD
//............................................................................................
// Lista Tipos de documentos. inicial 

  public consultaJuguetesI() {
    
    this.servi.getTipJuguetes().subscribe((data: any) => {
     //let dat = data;
    
      this.TipJuguete = JSON.parse(data);//data; 
      this.TituloJuguete = ' Listar Juguetes';
      this.tablaJuguete[0] = 'Indicador';
      this.tablaJuguete[1] = 'Denominación';
      this.tablaJuguete[2] = 'Nombre Juguete';
      this.tablaJuguete[3] = 'Tamaño';
      this.tablaJuguete[4] = 'Color';

    });
  }

//............................................................................................
// Lista Tipos de Juguetes.

public consultaJuguetes(op:any)
{
  //console.error(" El listado 1 " );
  if(this.controlLista == 1)
  {
      //console.log("component")
      this.servi.getTipJuguetes().subscribe((data: any) => {
        //console.error(" El listado 2 " );
        if (op == 1)
        {
            let dat = data;
         
            this.TipJuguete = JSON.parse(data);
            this.TituloJuguete = "LISTA DE Juguetes";
            this.tablaJuguete[0] = "indicador";
            this.tablaJuguete[1] = "Denominación";
            this.tablaJuguete[2] = "Nombre Juguete";
            this.tablaJuguete[3] = "Tamaño";
            this.tablaJuguete[4] = "Color";

            //console.error(" El listado 3 " + this.TipDocs);
          }
          else if(op == 2)
          {
            this.comboListaTipJuguete = JSON.parse(data);
            this.MiTipJuguete = null;
            this.TituloTipJuguete = "";
            this.TabBusTipJuguete[0] = "";
            this.TabBusTipJuguete[1] = "";
            this.TabBusTipJuguete[2] = "";
            this.TabBusTipJuguete[3] = "";
            this.TabBusTipJuguete[4] = "";
    
 
            //console.error(" El listado 4 " );
          }
          else if(op == 3)
          { 
            this.comboEditarTipJuguete  = JSON.parse(data);
            this.MiTipJugueteE = null;
            this.TituloTipJugueteEdit = ""; 
            // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
            // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
            console.error(" El listado 5 " );
          }              

    },
      error => { console.error(error + " ") });
  }
  else
  {
    this.TipJuguete = null;
    this.TituloJuguete = "";
    this.tablaJuguete[0] = "";
    this.tablaJuguete[1] = "";
    this.tablaJuguete[2] = ""; 
    this.tablaJuguete[3] = "";
    this.tablaJuguete[4] = "";
      
    this.controlLista = 1; 
  }
 
}


//--------------------------------------------------------------------------------------------->
//para Limpiar la lista

public LimpiarLista() 
{
  this.controlLista = 0;
}



  ngOnInit(): void {
    this.ListaJuguetes = this.formBuilder.group(
      {

      });
      
          this.formBuilder.group
  }

}
