import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  title = "MANEJO DE EMPLEADOS";
  
  TipEmpleado: any =[];               //Lista de Tipos de Empleado
  TituloEmpleado: any=[];          //Titulo Lista de Tipos de Empleado
  tablaEmpleado: any=[];           //Encabezados tabla Lista de Tipos de Empleado

  MiTipEmpleado: any = [];             //Tipo de Documento Buscado
  TituloTipEmpleado = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipEmpleados: any = [];        //Encabezados tabla Tipo de Documento Buscado 
  comboListaTipEmpleado: any = [];     //Combo Buscar Tipo de Documento

  TituloTipEmpleadoEdit = "";          //Titulo de Tipo de Documento a Editar
  MiTipEmpleadoE: any = [];            //Tipo de Documento a Editar
  comboEditarTipEmpleado: any = [];    //Combo Editar Tipo de Documento

  controlLista = 1;               //Control para limpiar la lista
  BuscarEvalor = 1;               //Control para carga del valor a buscar

  //*****************************************************************************
 //Form group 
 ListaEmpleados = new FormGroup( 
  { 

} );
  
//..............................................................................................
// CRUD
//............................................................................................
// Lista Tipos de documentos. inicial 

public consultaEmpleadosI()
{
      this.servi.getEmpleados ().subscribe((data: any) => 
      {

          let dat = data;
         
          this.TipEmpleado = JSON.parse(data);
          this.TituloEmpleado = "LISTA DE Empleados";
          this.tablaEmpleado[0] = "Indicador";
          this.tablaEmpleado[1] = "Tipo documento";
          this.tablaEmpleado[2] = "N. documento";
          this.tablaEmpleado[6] = "Persona";
          this.tablaEmpleado[7] = "Codigo E";
          this.tablaEmpleado[8] = "Cargo";
      });
  }

//............................................................................................
// Lista Tipos de documentos.

public consultaEmpleados(op:any)
{
  //console.error(" El listado 1 " );
  if(this.controlLista == 1)
  {
      //console.log("component")
      this.servi.getEmpleados().subscribe((data: any) => {
        //console.error(" El listado 2 " );
        if (op == 1)
        {
          let dat = data;
         
            this.TipEmpleado = JSON.parse(data);
            this.TituloEmpleado = "LISTA DE Empleados";
            this.tablaEmpleado[0] = "indicador";
            this.tablaEmpleado[1] = "Tipo Documento";
            this.tablaEmpleado[2] = "N. Ducumento";
            this.tablaEmpleado[3] = "Persona";
            this.tablaEmpleado[4] = "Codigo E";
            this.tablaEmpleado[5] = "Cargo";
            //console.error(" El listado 3 " + this.TipDocs);
          }
          else if(op == 2)
          {
            this.comboListaTipEmpleado = JSON.parse(data);
            this.MiTipEmpleado = null;
            this.TituloTipEmpleado = "";
            this.TabBusTipEmpleados[0] = "";
            this.TabBusTipEmpleados[1] = "";
            this.TabBusTipEmpleados[2] = "";
            this.TabBusTipEmpleados[3] = "";
            this.TabBusTipEmpleados[4] = "";
            this.TabBusTipEmpleados[5] = "";
            this.TabBusTipEmpleados[6] = "";
            this.TabBusTipEmpleados[7] = "";
            this.TabBusTipEmpleados[8] = "";
            //console.error(" El listado 4 " );
          }
          else if(op == 3)
          { 
            this.comboEditarTipEmpleado  = JSON.parse(data);
            this.MiTipEmpleadoE = null;
            this.TituloTipEmpleadoEdit = ""; 
            // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
            // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
            console.error(" El listado 5 " );
          }              

    },
      error => { console.error(error + " ") });
  }
  else
  {
    this.TipEmpleado = null;
    this.TituloTipEmpleado = "";
    this.tablaEmpleado[0] = "";
    this.tablaEmpleado[1] = "";
    this.tablaEmpleado[2] = ""; 
    this.tablaEmpleado[3] = "";
    this.tablaEmpleado[4] = "";
    this.tablaEmpleado[5] = ""; 
    this.tablaEmpleado[6] = "";
    this.tablaEmpleado[7] = "";
    this.tablaEmpleado[8] = ""; 
      
    this.controlLista = 1; 
  }
 
}


//--------------------------------------------------------------------------------------------->
//para Limpiar la lista

public LimpiarLista() 
{
  this.controlLista = 0;
}

  
  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router : Router
  ) { }

  ngOnInit(): void {
    this.ListaEmpleados = this.formBuilder.group(
      {

      });
  }

}
