import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service'

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {
  title = "MANEJO DE MATERIALES";
  
  TipMaterial: any =[];               //Lista de Tipos de Empleado
  TituloMaterial: any=[];          //Titulo Lista de Tipos de Empleado
  tablaMaterial: any=[];           //Encabezados tabla Lista de Tipos de Empleado

  MiTipMaterial: any = [];             //Tipo de Documento Buscado
  TituloTipMaterial = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipMaterial: any = [];        //Encabezados tabla Tipo de Documento Buscado 
  comboListaTipMaterial: any = [];     //Combo Buscar Tipo de Documento

  TituloTipMaterialEdit = "";          //Titulo de Tipo de Documento a Editar
  MiTipMaterialE: any = [];            //Tipo de Documento a Editar
  comboEditarTipMaterial: any = [];    //Combo Editar Tipo de Documento

  //TipoMaterial-------------------------
  MiTipCatalogoMaterial: any=[];
  comboListaMaterial: any=[];
  //TituloTipMaterial:any=[];
  //TabBusTipMaterial: any = [];

  //colores-------------------------
  MiTipCatalogoColor: any=[];
  comboListaColor: any=[];
  TituloTipColor:any=[];
  TabBusTipColor: any = [];

  controlLista = 1;               //Control para limpiar la lista
  BuscarEvalor = 1;  

   //*****************************************************************************
 //Form group 
 ListaMaterial = new FormGroup( 
  { 

} );
filtrarTipMaterial =  new FormGroup(
  {
    combofiltro: new FormControl()
  });

  InsertarGTipMaterial =  new FormGroup(
    {
      combofiltroMaterial:new FormControl(),
      combofiltroColor:new FormControl(),
      textClaseMaterial:new FormControl(),
      textColorMaterial:new FormControl(),
      textCPeso:new FormControl(),
      textNombre:new FormControl(),

    });

    ActualizarATipMaterial =  new FormGroup(
      {
        BuscarIdTipMaterial:new FormControl(),
        textnuevoClaseMaterial: new FormControl(), 
        textnuevoColorMaterial:new FormControl(),
        textnuevoCantidadPeso:new FormControl(),
        textnuevoNombreMaterial:new FormControl(),
        
        });
    BuscarATipInforme2 =  new FormGroup(
      {
        BuscarFechainicial:new FormControl(),
        BuscarFechaFinal:new FormControl(),
        
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

public consultaMaterialI() {
    
  this.servi.getTipMateriales().subscribe((data: any) => {
   //let dat = data;
  
    this.TipMaterial = JSON.parse(data);//data; 
    this.TituloMaterial = ' Listar Materiales';
    this.tablaMaterial[0] = 'Indicador';
    this.tablaMaterial[1] = 'Denominación';
    this.tablaMaterial[2] = 'Nombre Juguete';
    this.tablaMaterial[3] = 'Tamaño';
    this.tablaMaterial[4] = 'Color';

  });
}
//------TipoMaterial-----
public ListComboTipoMaterial() {
  this.servi.getTipCatalogoE('/'+28).subscribe((data:{})=>
  {
    this.comboListaMaterial=data;
    console.log("por aca 23 "+ this.comboListaMaterial.denominacion_universal)
  },
  error =>{ console.log(error)});
  };
 //------colores---
 public ListCombocolor() {
  this.servi.getTipCatalogoE('/'+15).subscribe((data:{})=>
  {
    this.comboListaColor=data;
    console.log("por aca 23 "+ this.comboListaColor.denominacion_universal)
  },
  error =>{ console.log(error)});
  };
//............................................................................................
// Lista Tipos de Juguetes.

public consultaMaterial(op:any)
{
//console.error(" El listado 1 " );
if(this.controlLista == 1)
{
    console.log("component")
    this.servi.getTipMateriales().subscribe((data: any) => {
      //console.error(" El listado 2 " );
      if (op == 1)
      {
          //let dat = data;
       
          this.TipMaterial = JSON.parse(data);
          this.TituloMaterial = "LISTA DE Juguetes";
          this.tablaMaterial[0] = "indicador";
          this.tablaMaterial[1] = "Nombre Material";
          this.tablaMaterial[2] = "Clase Material";
          this.tablaMaterial[3] = "Color";
          this.tablaMaterial[4] = "Cantidad Peso gr";

          //console.error(" El listado 3 " + this.TipDocs);
        }
        else if(op == 2)
        {
          this.comboListaTipMaterial = JSON.parse(data);
          this.MiTipMaterial = null;
          this.TituloTipMaterial = "";
          this.TabBusTipMaterial[0] = "";
          this.TabBusTipMaterial[1] = "";
          this.TabBusTipMaterial[2] = "";
          this.TabBusTipMaterial[3] = "";
          this.TabBusTipMaterial[4] = "";
  

          //console.error(" El listado 4 " );
        }
        else if(op == 3)
        { 
          this.comboEditarTipMaterial  = JSON.parse(data);
          this.MiTipMaterialE = null;
          this.TituloTipMaterialEdit = ""; 
          // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
          // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
          console.error(" El listado 5 " );
        }              

  },
    error => { console.error(error + " ") });
}
else
{
  this.TipMaterial = null;
  this.TituloMaterial = "";
  this.tablaMaterial[0] = "";
  this.tablaMaterial[1] = "";
  this.tablaMaterial[2] = ""; 
  this.tablaMaterial[3] = "";
  this.tablaMaterial[4] = "";
    
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

public buscarTipMaterial() 
{

var filtovalor = this.filtrarTipMaterial.getRawValue()['combofiltro'];
//console.log("318    " + filtovalor );
this.servi.getTipMaterial('/'+filtovalor).subscribe((data: {})=>
{
  console.log("313    " + filtovalor );

  this.MiTipMaterial = data;

  
  console.log("la data es " + data);
  console.log("MiTipEmpleado es " + this.MiTipMaterial);
  console.log("MiTipJugute es " + this.MiTipMaterial[0].Id_juguetes/* + " - " + this.MiTipEmpleado[0].tipo_documento + " - " + this.MiTipEmpleado[0].Numero_Documento+ " - " + this.MiTipEmpleado[0].Persona*/);

  this.TituloTipMaterial = "TIPO EMPLEADO SELECCIONADO";
  this.TabBusTipMaterial[0] = "indicador";
  this.TabBusTipMaterial[1] = "Nombre del material";
  this.TabBusTipMaterial[2] = "Clase de material";
  this.TabBusTipMaterial[3] = "Color";
  this.TabBusTipMaterial[4] = "Peso gr";
 
},
  error => { console.log(error) });

}
//--------------------------------------------------------------
 //Para insertar un nuevo Material

 public InsertarTipMaterial() {

  var datosvalo1 = this.InsertarGTipMaterial.getRawValue()['textClaseMaterial'];
  var datosvalo2 = this.InsertarGTipMaterial.getRawValue()['textColorMaterial'];
  var datosvalo3 = this.InsertarGTipMaterial.getRawValue()['textCPeso'];
  var datosvalo4 = this.InsertarGTipMaterial.getRawValue()['textNombre'];
  
  var cadena = { "clase_material": datosvalo1, "color_material":datosvalo2, 
                  "cantidad_peso":datosvalo3, "nombre_material":datosvalo4};

  
  this.servi.insertTipMaterial(cadena).then
    ( res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });
    this.InsertarGTipMaterial.reset();
}

//----------------------------------------------------------------------------
// Consulta un tipo de documento por medio de su id para editarlo

buscarEditarTipMaterial() 
{
  if ( this.BuscarEvalor != 0)
  {
    this.BuscarEvalor = this.ActualizarATipMaterial.getRawValue()['BuscarIdTipMaterial'];
    //console.error(" dos el filtro " + this.BuscarEvalor);
  }
  //console.error(" tres el filtro " + this.BuscarEvalor);

  this.servi.getTipMaterial('/' + this.BuscarEvalor).subscribe((data: {}) => {

    this.MiTipMaterialE = data; 
    this.TituloTipMaterialEdit = "MATERIAL A EDITAR";
       
    console.log("inten 159 "+ this.MiTipMaterialE[0].clase_material )
    console.log("inten 158 "+ this.MiTipMaterialE[0].color_material)
  }, error => { console.log(error) });

}
//--------------------------------------------------------------
// Actualiza el Tipo de Material 

public ActualizarTipMaterial() 
{
  var nuevoinitipClaseMaterial = this.ActualizarATipMaterial.getRawValue()['textnuevoClaseMaterial'];
  var nuevoiniColorMaterial = this.ActualizarATipMaterial.getRawValue()['textnuevoColorMaterial'];
  var nuevoiniCantidadPeso = this.ActualizarATipMaterial.getRawValue()['textnuevoCantidadPeso'];
  var nuevoiniNombreMaterial = this.ActualizarATipMaterial.getRawValue()['textnuevoNombreMaterial'];
   //console.log("dat 158 "+ nuevotipIdMate)
  var cadena = { "Id_material": this.BuscarEvalor,"clase_material":nuevoinitipClaseMaterial , "color_material":nuevoiniColorMaterial,  "cantidad_peso":nuevoiniCantidadPeso, 
  "nombre_material":nuevoiniNombreMaterial};
  //console.log("actu 123" + nuevotipIdMate)
  this.servi.updateTipMaterial(cadena).then
    (
      res => {
        console.log("res  ",res)
      }
    ).catch(err => {
      console.log(err)
    });

    this.BuscarEvalor = 0;
    this.ActualizarATipMaterial.reset();
}
//-----------informe 2-----------------
buscarInforme2() 
{
  if ( this.BuscarEvalor != 0)
  {
    this.BuscarEvalor = this.ActualizarATipMaterial.getRawValue()['BuscarIdTipMaterial'];
    //console.error(" dos el filtro " + this.BuscarEvalor);
  }
  //console.error(" tres el filtro " + this.BuscarEvalor);

  this.servi.getTipMaterial('/' + this.BuscarEvalor).subscribe((data: {}) => {

    this.MiTipMaterialE = data; 
    this.TituloTipMaterialEdit = "MATERIAL A EDITAR";
       
    console.log("inten 159 "+ this.MiTipMaterialE[0].clase_material )
    console.log("inten 158 "+ this.MiTipMaterialE[0].color_material)
  }, error => { console.log(error) });

}

  ngOnInit(): void {
    this.ListaMaterial = this.formBuilder.group(
      {

      });
      
          this.formBuilder.group
    this.filtrarTipMaterial = this.formBuilder.group(
      {
          combofiltro: []
        }); 
     this.InsertarGTipMaterial = this.formBuilder.group(
        {   
          combofiltroMaterial:[],
          combofiltroColor:[],
          textClaseMaterial:[],
          textColorMaterial:[],
          textCPeso:[],
          textNombre:[],
          
        });    
        this.formBuilder.group

        this.ActualizarATipMaterial = this.formBuilder.group(
          {
            BuscarIdTipMaterial:[],
            textnuevoClaseMaterial: [], 
            textnuevoColorMaterial:[],
            textnuevoCantidadPeso:[],
            textnuevoNombreMaterial:[],
          });
          this.formBuilder.group
  }

}
