import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  title = "MANEJO DE Catalogos";
  
  TipCatalogo: any =[];               //Lista de Tipos de Empleado
  TituloCatalogo: any=[];          //Titulo Lista de Tipos de Empleado
  tablaCatalogo: any=[];           //Encabezados tabla Lista de Tipos de Empleado

  MiTipCatalogo: any = [];             //Tipo de Documento Buscado
  TituloTipCatalogo = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipCatalogo: any = [];        //Encabezados tabla Tipo de Documento Buscado 
  comboListaTipCatalogo: any = [];     //Combo Buscar Tipo de Documento

  TituloTipCatalogoEdit = "";          //Titulo de Tipo de Documento a Editar
  MiTipCatalogoE: any = [];            //Tipo de Documento a Editar
  comboEditarTipCatalogo: any = [];    //Combo Editar Tipo de Documento

  controlLista = 1;               //Control para limpiar la lista
  BuscarEvalor = 1;  

    //*****************************************************************************
 //Form group 
 ListaCatalogo = new FormGroup( 
  { 

} );
filtrarTipCatalogo =  new FormGroup(
  {
    combofiltro: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router
  ) { }
  //..............................................................................................
// CRUD
//............................................................................................
// Lista Tipos de documentos. inicial 

public consultaCatalogoI() {
    
  this.servi.getTipCatalogos().subscribe((data: any) => {
   //let dat = data;
  
    this.TipCatalogo = JSON.parse(data);//data; 
    this.TituloCatalogo = ' Listar Materiales';
    this.tablaCatalogo[0] = 'Indicador';
    this.tablaCatalogo[1] = 'Denominación';
    this.tablaCatalogo[2] = 'Nombre Juguete';

  });
}

//............................................................................................
// Lista Tipos de Juguetes.

public consultaCatalogo(op:any)
{
//console.error(" El listado 1 " );
if(this.controlLista == 1)
{
    console.log("component")
    this.servi.getTipCatalogos().subscribe((data: any) => {
      console.error(" El listado 2 " );
      if (op == 1)
      {
          //let dat = data;
       
          this.TipCatalogo = JSON.parse(data);
          this.TituloCatalogo = "LISTA DE Juguetes";
          this.tablaCatalogo[0] = "indicador";
          this.tablaCatalogo[1] = "Nombre Material";
          this.tablaCatalogo[2] = "Clase Material";

          //console.error(" El listado 3 " + this.TipDocs);
        }
        else if(op == 2)
        {
          this.comboListaTipCatalogo = JSON.parse(data);
          this.MiTipCatalogo = null;
          this.TituloTipCatalogo = "";
          this.TabBusTipCatalogo[0] = "";
          this.TabBusTipCatalogo[1] = "";
          this.TabBusTipCatalogo[2] = "";

          //console.error(" El listado 4 " );
        }
        else if(op == 3)
        { 
          this.comboEditarTipCatalogo  = JSON.parse(data);
          this.MiTipCatalogoE = null;
          this.TituloTipCatalogoEdit = ""; 
          // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
          // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
          console.error(" El listado 5 " );
        }              

  },
    error => { console.error(error + " ") });
}
else
{
  this.TipCatalogo = null;
  this.TituloCatalogo = "";
  this.tablaCatalogo[0] = "";
  this.tablaCatalogo[1] = "";
  this.tablaCatalogo[2] = ""; 
  this.tablaCatalogo[3] = "";
  this.tablaCatalogo[4] = "";
    
  this.controlLista = 1; 
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

public buscarTipCatalogo() 
{

var filtovalor = this.filtrarTipCatalogo.getRawValue()['combofiltro'];
//console.log("318    " + filtovalor );
this.servi.getTipCatalogo('/'+filtovalor).subscribe((data: {})=>
{
  console.log("313    " + filtovalor );

  this.MiTipCatalogo = data;

  
  console.log("la data es " + data);
  console.log("MiTipEmpleado es " + this.MiTipCatalogo);
  console.log("MiTipJugute es " + this.MiTipCatalogo[0].Id_catalogo_universal/* + " - " + this.MiTipEmpleado[0].tipo_documento + " - " + this.MiTipEmpleado[0].Numero_Documento+ " - " + this.MiTipEmpleado[0].Persona*/);

  this.TituloTipCatalogo = "TIPO EMPLEADO SELECCIONADO";
  this.TabBusTipCatalogo[0] = "indicador";
  this.TabBusTipCatalogo[1] = "Nombre del material";
  this.TabBusTipCatalogo[2] = "Clase de material";
  this.TabBusTipCatalogo[3] = "Color";
  this.TabBusTipCatalogo[4] = "Peso gr";
 
},
  error => { console.log(error) });

}

  ngOnInit(): void {
    this.ListaCatalogo = this.formBuilder.group(
      {

      });
      
          this.formBuilder.group
    this.filtrarTipCatalogo = this.formBuilder.group(
      {
          combofiltro: []
        }); 
  }

}
