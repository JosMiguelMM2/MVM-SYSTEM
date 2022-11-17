import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service'
@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
  TipMaterial: any =[];               //Lista de Tipos de Empleado
  TituloMaterial: any=[];          //Titulo Lista de Tipos de Empleado
  tablaMaterial: any=[];

  title="MANEJO DE INFORME";
  controlLista=1;
  Informe: any=[];
  TituloInforme= "";
  TabBusInforme: any=[];

  Informes: any=[];
  TituloInformes= "";
  TablaInformes: any=[];

  Equipo: any=[];
  TituloEquipo="";
  TabBusEquipo: any=[];
  comboListarEquipo: any=[];

  informe= new FormGroup({
    textEquipo: new FormControl(),
    DateFechaI: new FormControl(),
    DateFechaF: new FormControl()
  });
  listainformes= new FormGroup({

  });
  ListaMaterial = new FormGroup(
    {

  } );
  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router
  ){}
// -----------------------------------------------------------------------------------------
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
// Consulta un tipo de documento por medio de su id.

public consultainformes(){
  this.servi.getTipMateriales().subscribe((data:{})=>{
    this.Informes=data;
    this.TituloInformes="LISTA DE INFORMES DE MATERIALES";
    this.TablaInformes[0]="indicador";
    this.TablaInformes[1]=" Fecha";
    this.TablaInformes[2]="Peso gr ";
    this.TablaInformes[3]="Detalle";
    this.TablaInformes[4]="Material";
  },error =>{console.log(error)});
}
InformeMateriales()
{
//console.log("318    " + filtovalor );
  //var equipo=this.informe.getRawValue()['textEquipo'];
  var fechaini=this.informe.getRawValue()['DateFechaI'];
  var fechafin=this.informe.getRawValue()['DateFechaF'];
  console.log("fecha inicio" + fechaini );

  this.servi.getTipInforme2(fechaini,fechafin).subscribe((data:{})=>{
    this.Informe= data;
    this.TituloInforme="INFORME DE MATERIALES POR PERIODO DE TIEMPO";
    this.TabBusInforme[0]="indicador";
    this.TabBusInforme[1]="Fecha";
    this.TabBusInforme[2]="Peso gr";
    this.TabBusInforme[3]="Detalle";
    this.TabBusInforme[4]="Material";
    console.log(data);
  },
  error =>{console.log(error)});
}
  ngOnInit(): void {
    this.ListaMaterial = this.formBuilder.group(
      {

      });
  }


}
