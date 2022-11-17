import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {JuguetesService} from '../juguetes.service'

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
  TipMaterial: any = [];               //Lista de Tipos de Empleado
  TituloMaterial: any = [];          //Titulo Lista de Tipos de Empleado
  tablaMaterial: any = [];

  title = "MANEJO DE INFORME";
  controlLista = 1;
  Informe: any = [];
  TituloInforme = "";
  TabBusInforme: any = [];
  TabBusInforme2: any = [];

 
  Informep: any=[];
  TituloInformep= "";
  TabBusInformep: any=[];

  Informes: any=[];
  TituloInformes= "";
  TablaInformes: any=[];

  Equipo: any = [];
  TituloEquipo = "";
  TabBusEquipo: any = [];
  comboListarEquipo: any = [];
  InformeCantPro: any = [];
  TablaConsultaJuguetes: any = [];
  TituloInforme2 = "";

  informe = new FormGroup({
    textEquipo: new FormControl(),
    DateFechaI: new FormControl(),
    DateFechaF: new FormControl()
  });
  listainformes = new FormGroup({});

  informeP= new FormGroup({
    textEquipoP: new FormControl(),
    DateFechaIP: new FormControl(),
    DateFechaFP: new FormControl()
  });
  
  
  ListaMaterial = new FormGroup(
    {});

  InformeCantidadProducida = new FormGroup({
    Id: new FormControl(),
    DateFechaI2: new FormControl(),
    DateFechaF2: new FormControl()
  });



  ListaJuguetes = new FormGroup( 
    { 
    } );
  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router) {
  }


  InformeMateriales() {
    let fechaini = this.informe.getRawValue()['DateFechaI'];
    let fechafin = this.informe.getRawValue()['DateFechaF'];
    console.log("fecha inicio" + fechaini);

    this.servi.getTipInforme2(fechaini, fechafin).subscribe((data: {}) => {
        this.Informe = data;
        this.TituloInforme = "INFORME DE MATERIALES POR PERIODO DE TIEMPO";
        this.TabBusInforme[0] = "indicador";
        this.TabBusInforme[1] = "Fecha";
        this.TabBusInforme[2] = "Peso gr";
        this.TabBusInforme[3] = "Detalle";
        this.TabBusInforme[4] = "Material";
        console.log(data);
      },
      error => {
        console.log(error)
      });
  }

  public ConsultarJuguete() {
    this.servi.getTipJuguetess().subscribe((data: any) => {
      this.TablaConsultaJuguetes = JSON.parse(data);

    });
  }

  public InformeCantidadProducidaM() {
    let IdInforme = this.InformeCantidadProducida.getRawValue()['Id'];
    let fechaini = this.InformeCantidadProducida.getRawValue()['DateFechaI2'];
    let fechafin = this.InformeCantidadProducida.getRawValue()['DateFechaF2'];
    console.log("fecha inicio " + fechaini);
    console.log("fecha fin " + fechafin);
    console.log("IdInforme " + IdInforme);

    this.servi.getTipProJuguete(IdInforme, fechaini, fechafin).subscribe((data: {}) => {
        this.InformeCantPro = data;
        this.TituloInforme2 = "INFORME DE Cantidad de Juguetes Producidos";
        this.TabBusInforme2[0] = "IdD";
        this.TabBusInforme2[1] = "Fecha";
        this.TabBusInforme2[2] = "Juguetes";
        this.TabBusInforme2[3] = "Juguete";
        this.TabBusInforme2[4] = "Empleado";
        this.TabBusInforme2[5] = "Errores";
        this.TabBusInforme2[6] = "Cantidad Producida";
        this.TabBusInforme2[7] = "Productos utiles";
      },
      error => {
        console.log(error)
      });
  }

// -----------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.ListaMaterial = this.formBuilder.group(
      {});

    this.InformeCantidadProducida = this.formBuilder.group({
      Id: [],
      DateFechaI2: [],
      DateFechaF2: []
    });
      
      
  }
  

}



