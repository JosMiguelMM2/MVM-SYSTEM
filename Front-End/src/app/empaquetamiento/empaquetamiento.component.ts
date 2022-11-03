import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { JuguetesService } from '../juguetes.service';

@Component({
  selector: 'app-empaquetamiento',
  templateUrl: './empaquetamiento.component.html',
  styleUrls: ['./empaquetamiento.component.css']
})
export class EmpaquetamientoComponent implements OnInit {
  title = 'Empaque';
  Empaquetamiento: any = [];
  TituloEmpaque = ''; //Titulo Lista de Tipos de Documentos
  TablaEmpaque: any = []; //Encabezados tabla Lista de Tipos de Documentos

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiEmpaque: any = []; //Tipo de Documento Buscado
  TituloEmpaq = ''; //Titulo de Tipo de Documento Buscado
  TabBusEmpaque: any = []; //Encabezados tabla Tipo de Documento Buscado
  comboListaEmpaque: any = []; //Combo Buscar Tipo de Documento

  TituloEmpaqueEdit = ''; //Titulo de Tipo de Documento a Editar
  MiEmpaqueE: any = []; //Tipo de Documento a Editar
  comboEditarEmpaque: any = []; //Combo Editar Tipo de Documento

  //*****************************************************************************
  //Form group
  //Mostrar Lista de Empaque
  ListaEmpaque = new FormGroup({});

  //BUSCAR Empaque POR ID
  filtraridempaque = new FormGroup({
    combofiltro: new FormControl(),
  });

  //INSERTAR NUEVO EMPAQUE
  InsertarEmpaque = new FormGroup({
    TipEmpa: new FormControl(),
    JugueteEmp: new FormControl(),
    EmpleaEmpa: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
    private juguetesService: JuguetesService,
    Router: Router) { }

  public LimpiarLista() {
    this.controlLista = 0;
  }

  public getEmpaquetamiento(op: any) {
    if (this.controlLista == 1) {

      this.juguetesService.getTipEmpaques().subscribe((data: any) => {

        if (op == 1) {

          this.Empaquetamiento = JSON.parse(data);
          this.TituloEmpaque = 'Lista de Empaquetamiento';
          this.TablaEmpaque[0] = 'Id Empaque';
          this.TablaEmpaque[1] = 'Tipo de empaque';
          this.TablaEmpaque[2] = 'Juguete';
          this.TablaEmpaque[3] = 'Persona'

        } else if (op == 2) {

          this.comboListaEmpaque = JSON.parse(data);
          this.MiEmpaque = null;
          this.TituloEmpaq = '';
          this.TabBusEmpaque[0] = '';
          this.TabBusEmpaque[1] = '';
          this.TabBusEmpaque[2] = '';
          this.TabBusEmpaque[3] = '';
        } else if (op == 3) {
          this.comboEditarEmpaque = JSON.parse(data);
          this.MiEmpaqueE = null;
          this.TituloEmpaqueEdit = '';
          // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
          // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
          console.error(' El listado 5 ');
        }
      })
    } else {
      this.TituloEmpaque = '';
      this.Empaquetamiento = null;
      this.TablaEmpaque[0] = '';
      this.TablaEmpaque[1] = '';
      this.TablaEmpaque[2] = '';
      this.TablaEmpaque[3] = '';
      this.controlLista = 1;
    }
  }

  public getEmpaqueId() {
    let filtovalor = this.filtraridempaque.getRawValue()['combofiltro'];
    console.log('318    ' + filtovalor);
    this.juguetesService.getTipEmpaque('/' + filtovalor).subscribe(
      (data: {}) => {
        console.log('313    ' + filtovalor);

        this.MiEmpaque = data;

        // console.log("la data es " + data);
        // console.log("MiTipDoc es " + this.MiTipDoc);
        //console.log("MiTipDoc es " + this.MiTipDoc[0].id_tip_doc + " - " + this.MiTipDoc[0].tipo_documento + " - " + this.MiTipDoc[0].iniciales_tip_doc);

        this.TituloEmpaq = 'Buscar Empaque por Id';
        this.TabBusEmpaque[0] = 'Id Empaque';
        this.TabBusEmpaque[1] = 'Tipo de empaque';
        this.TabBusEmpaque[2] = 'Juguete';
        this.TabBusEmpaque[3] = 'Persona';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public InsertarEmpaqueM() {
    let datosvalo1 = this.InsertarEmpaque.getRawValue()['TipEmpa'];
    let datosvalo2 = this.InsertarEmpaque.getRawValue()['JugueteEmp'];
    let datosvalo3 = this.InsertarEmpaque.getRawValue()['EmpleaEmpa'];
    
    let cadena = { "Tipo_Empaque": datosvalo1, "Juguete_Empaque": datosvalo2, "Empleado_Empaque": datosvalo3 };
     this.juguetesService.insertTipEmpaque(cadena).then
      (res => {
        console.log(res)
      }
      ).catch(err => {
        console.log(err)
      });
    this.InsertarEmpaque.reset();
    console.log('318    ' + datosvalo1 + ' - ' + datosvalo2 + ' - ' + datosvalo3);
 
  }

  ngOnInit(): void {
    this.ListaEmpaque = this.formBuilder.group({});

    this.filtraridempaque = this.formBuilder.group({
      combofiltro: [],
    });

    this.InsertarEmpaque = this.formBuilder.group({
      TipEmpa: [],
      JugueteEmp: [],
      EmpleaEmpa: [],
    }); this.formBuilder.group;


  }

}
