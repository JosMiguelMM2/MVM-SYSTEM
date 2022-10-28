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

  Catalogo:any=[];
  TituloCatalogo="";
  TabBusCatalogo: any=[];
  comboListarCatalogo: any=[];
  
  //*****************************************************************************
 //Form group 
 ListaEmpleados = new FormGroup( 
  { 

} );

filtrarTipEmpleado =  new FormGroup(
  {
    combofiltro: new FormControl()
  });


  InsertarGTipEmpleado =  new FormGroup(
    {
      textTipEmpleado: new FormControl(), 
      textPrNoTipEmpleado:new FormControl(),
      textSgNoTipEmpleado:new FormControl(),
      textPrApTipEmpleado:new FormControl(),
      textSgApTipEmpleado:new FormControl(),
      textNumTipEmpleado:new FormControl(),
      textCodTipEmpleado:new FormControl(),
      textCarTipEmpleado:new FormControl(),
    });
  
  ActualizarATipEmpleado =  new FormGroup(
    {
      BuscarIdTipEmpleado:new FormControl(),  
      textnuevotipempleado:new FormControl(), 
      textnuevoinicialestipempleado: new FormControl()
      });
  
      constructor(
        private formBuilder: FormBuilder,
        private servi: JuguetesService,
        Router : Router
      ) { }
//..............................................................................................
// CRUD
//............................................................................................
// Lista Tipos de documentos. inicial 

public consultaEmpleadosI()
{
      this.servi.getEmpleados ().subscribe((data: any) => 
      {

          //let data = data;
         
          this.TipEmpleado = JSON.parse(data);
          this.TituloEmpleado = "Lista Dd Empleados";
          this.tablaEmpleado[0] = "Indicador";
          this.tablaEmpleado[1] = "Tipo documento";
          this.tablaEmpleado[2] = "N. documento";
          this.tablaEmpleado[3] = "Persona";
          this.tablaEmpleado[4] = "Codigo E";
          this.tablaEmpleado[5] = "Cargo";
      });
  }

//............................................................................................
// Lista Tipos de Empleados.

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
          //let dat = data;
         
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
      
    this.controlLista = 1; 
  }
 
}

public consultaCatalogo(op:any){
  if(this.controlLista==1){
    this.servi.getTipCatalogos().subscribe((data: any)=>{
      if(op==1){
        let dat=data;
        this.comboListarCatalogo=JSON.parse(data);
        this.Catalogo=null;
      }
    })
  }
}


//--------------------------------------------------------------------------------------------->
//para Limpiar la lista

public LimpiarLista() 
{
  this.controlLista = 0;
}

// -----------------------------------------------------------------------------------------
// Consulta un tipo de documento por medio de su id.

public buscarTipEmpleado() 
{

  var filtovalor = this.filtrarTipEmpleado.getRawValue()['combofiltro'];
  //console.log("318    " + filtovalor );
  this.servi.getTipEmpleado('/'+filtovalor).subscribe((data: {})=>
  {
    console.log("313    " + filtovalor );

    this.MiTipEmpleado = data;


    //console.log("la data es " + data);
    //console.log("MiTipEmpleado es " + this.MiTipEmpleado);
   // console.log("MiTipEmpleado es " + this.MiTipEmpleado[0].Id_empleados + " - " + this.MiTipEmpleado[0].tipo_documento /*+ " - " + this.MiTipDoc[0].iniciales_tip_doc*/);

    this.TituloTipEmpleado = "TIPO EMPLEADO SELECCIONADO";
    this.TabBusTipEmpleados[0] = "indicador";
    this.TabBusTipEmpleados[1] = "Tipo Documento";
    this.TabBusTipEmpleados[2] = "N. Ducumento";
    this.TabBusTipEmpleados[3] = "Persona";
    this.TabBusTipEmpleados[4] = "Codigo E";
    this.TabBusTipEmpleados[5] = "Cargo";
  },
    error => { console.log(error) });

}





//--------------------------------------------------------------
 //Para insertar un nuevo Tipo de Documento

public InsertarTipEmpleado() {


  var datosvalo1 = this.InsertarGTipEmpleado.getRawValue()['textTipIdCat'];
  var datosvalo2 = this.InsertarGTipEmpleado.getRawValue()['textIniTipNom1emp'];
  var datosvalo3 = this.InsertarGTipEmpleado.getRawValue()['textIniTipNom2emp'];
  var datosvalo4 = this.InsertarGTipEmpleado.getRawValue()['textIniTipApe1emp'];
  var datosvalo5 = this.InsertarGTipEmpleado.getRawValue()['textIniTipApe2emp'];
  var datosvalo6 = this.InsertarGTipEmpleado.getRawValue()['textIniTipDocEmple'];
  var datosvalo7 = this.InsertarGTipEmpleado.getRawValue()['textIniTipNumEmple'];
  var datosvalo8 = this.InsertarGTipEmpleado.getRawValue()['textIniTipCarEmple'];
  
  var cadena = { "Id_catalogos_universal": datosvalo1, "nombre1_empleados":datosvalo2,  "nombre2_empleados":datosvalo3, "apellido1_empleados":datosvalo4, "apellido2_empleados":datosvalo5, "tipodocu_empleados":datosvalo6, "numdoc_empleados":datosvalo7, "cargo_empleados":datosvalo8 };

  
  this.servi.insertTipEmpleado(cadena).then
    ( res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });
    this.InsertarGTipEmpleado.reset();
}
//----------------------------------------------------------------------------
// Consulta un tipo de documento por medio de su id para editarlo

  buscarEditarTipEmpleado() 
  {
    if ( this.BuscarEvalor != 0)
    {
      this.BuscarEvalor = this.ActualizarATipEmpleado.getRawValue()['BuscarIdTipEmpleado'];
      //console.error(" dos el filtro " + this.BuscarEvalor);
    }
    //console.error(" tres el filtro " + this.BuscarEvalor);

    this.servi.getTipEmpleado('/' + this.BuscarEvalor).subscribe((data: {}) => {

      this.MiTipEmpleadoE = data; 
      this.TituloTipEmpleadoEdit = "EMPLEADO A EDITAR";   
      
    }, error => { console.log(error) });

  }
  //--------------------------------------------------------------
// Actualiza el Tipo de Documento 

  public ActualizarTipEmpleado() 
  {

    var nuevotipIdcat = this.ActualizarATipEmpleado.getRawValue()['textnuevotipIdcat'];
    var nuevoinitipNom1emp = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipNom1emp'];
    var nuevoinitipNom2emp = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipNom2emple'];
    var nuevoinitipApe1emp = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipApe1emp'];
    var nuevoinitipApe2emp = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipApe2emp'];
    var nuevoinitipDocEmple = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipDocEmpl'];
    var nuevoinitipNumEmple = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipNumEmple'];
    var nuevoinitipCarEmple = this.ActualizarATipEmpleado.getRawValue()['textnuevoinicialestipCarEmple'];

    var cadena = { "Id_empleados": this.BuscarEvalor,"Id_catalogos_universal":nuevotipIdcat , "nombre1_empleados":nuevoinitipNom1emp,  "nombre2_empleados":nuevoinitipNom2emp, "apellido1_empleados":nuevoinitipApe1emp, "apellido2_empleados":nuevoinitipApe2emp, "tipodocu_empleados":nuevoinitipDocEmple, "numdoc_empleados":nuevoinitipNumEmple, "cargo_empleados":nuevoinitipCarEmple };
    
    this.servi.updateTipEmpleado(cadena).then
      (
        res => {
          console.log("res  ",res)
        }
      ).catch(err => {
        console.log(err)
      });

      this.BuscarEvalor = 0;
      this.ActualizarATipEmpleado.reset();
  }

//----------------------++++++++++++++


  ngOnInit(): void {
    this.ListaEmpleados = this.formBuilder.group(
      {

      });
      this.filtrarTipEmpleado = this.formBuilder.group(
        {
          combofiltro: []
        }); 
  
      this.InsertarGTipEmpleado = this.formBuilder.group(
        {   
          textTipEmpleado: [], 
          textIniTipEmpleado:[]
        });    
        this.formBuilder.group
        
        this.ActualizarATipEmpleado = this.formBuilder.group(
          {
            BuscarIdTipDoc: [], 
            textnuevotipdoc: [], 
            textnuevoinicialestipdoc: []
          });
          this.formBuilder.group
  }

}
