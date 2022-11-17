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

  Informep: any=[];
  TituloInformep= "";
  TabBusInformep: any=[];

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

  informeP= new FormGroup({
    textEquipoP: new FormControl(),
    DateFechaIP: new FormControl(),
    DateFechaFP: new FormControl()
  });
  
  listainformes= new FormGroup({

  });
  ListaMaterial = new FormGroup(
    {

  } );
  ListaJuguetes = new FormGroup( 
    { 
    } );
  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router
  ){}
// -----------------------------------------------------------------------------------------

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
