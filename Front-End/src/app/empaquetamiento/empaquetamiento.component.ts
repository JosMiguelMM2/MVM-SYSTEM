import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import {Router} from '@angular/router';

import {JuguetesService} from '../juguetes.service';

@Component({
  selector: 'app-empaquetamiento',
  templateUrl: './empaquetamiento.component.html',
  styleUrls: ['./empaquetamiento.component.css']
})
export class EmpaquetamientoComponent implements OnInit {
  title = 'Empaque';
  Empaquetamiento: any = [];
  TituloEmpaque = ''; //Titulo Lista de Tipos de Empaques
  TablaEmpaque: any = []; //Encabezados tabla Lista de Tipos de Empaques

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiEmpaque: any = []; //Tipo de Empaque Buscado
  TituloEmpaq = ''; //Titulo de Tipo de Empaque Buscado
  TabBusEmpaque: any = []; //Encabezados tabla Tipo de Empaque Buscado
  comboListaEmpaque: any = []; //Combo Buscar Tipo de Empaque

  TituloEmpaqueEdit = ''; //Titulo de Tipo de Empaque a Editar
  MiEmpaqueE: any = []; //Tipo de Empaque a Editar
  comboEditarEmpaque: any = []; //Combo Editar Tipo de Empaque
  comboTipoEmpaque: any = []; //Tipo de empaque desde catalogo
  comboJugueteEmp: any = [];
  comboListEmploEmp: any = [];

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

  //ACTUALIZAR EMPAQUE
  ActualizarEmpaque = new FormGroup({
    BuscarIdEmpaqueE: new FormControl(),
    TipEmpaE: new FormControl(),
    JugueteEmpE: new FormControl(),
    EmpleaEmpaE: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
              private juguetesService: JuguetesService,
              Router: Router) {
  }

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

  //Tipo de empaque
  public ListTipoEmpaque() {
    this.juguetesService.getTipCatalogoE('/' + 38).subscribe((data: {}) => {
        this.comboTipoEmpaque = data;
        console.log("por aca cargo 23 " + this.comboTipoEmpaque.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  }

  //Juguete
  public ListaJuguetesEm() {
    this.juguetesService.getTipJuguetess().subscribe((data: any) => {
        this.comboJugueteEmp = JSON.parse(data);
        console.log("por aca cargo 23 " + this.comboTipoEmpaque.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  }

  // -----------------------------------------------------------------------------------------
  //MOSTRAR LOS EMPLEADOS DISPONIBLES
  public consultarEmpleadosEmp() {
    this.juguetesService.getEmpleados().subscribe((data: any) => {
      this.comboListEmploEmp = JSON.parse(data);

    });
  }

  public InsertarEmpaqueM() {
    let datosvalo1 = this.InsertarEmpaque.getRawValue()['TipEmpa'];
    let datosvalo2 = this.InsertarEmpaque.getRawValue()['JugueteEmp'];
    let datosvalo3 = this.InsertarEmpaque.getRawValue()['EmpleaEmpa'];

    let cadena = {"Tipo_Empaque": datosvalo1, "Juguete_Empaque": datosvalo2, "Empleado_Empaque": datosvalo3};
    this.juguetesService.insertTipEmpaque(cadena).then
    (res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });
    this.InsertarEmpaque.reset();
    console.log('Datos de insertar empaque    ' + datosvalo1 + ' - ' + datosvalo2 + ' - ' + datosvalo3);

  }


  buscarEditarEmpaque() {
    if (this.BuscarEvalor != 0) {
      this.BuscarEvalor = this.ActualizarEmpaque.getRawValue()['BuscarIdEmpaqueE'];

    }
    this.juguetesService.getTipEmpaque('/' + this.BuscarEvalor).subscribe((data: {}) => {

      this.MiEmpaqueE = data;
      console.log(this.MiEmpaqueE)
      this.TituloEmpaqueEdit = "TIPO DE EMPAQUE A EDITAR";
      console.log("hasta aqui va bien " + this.BuscarEvalor);
    }, error => {
      console.log(error)
    });

  }

  //ACTUALIZAR EMPAQUE
  public ActualizarEmpaqueM() {

    let TipoEmpaqueEdit = this.ActualizarEmpaque.getRawValue()['TipEmpaE'];
    let JugueteEmpaqueEdit = this.ActualizarEmpaque.getRawValue()['JugueteEmpE'];
    let EmpleadoEmpaqueEdit = this.ActualizarEmpaque.getRawValue()['EmpleaEmpaE'];

    let cadenaup = {
      "Id_Empaque": this.BuscarEvalor,
      "Tipo_Empaque": TipoEmpaqueEdit,
      "Juguete_Empaque": JugueteEmpaqueEdit,
      "Empleado_Empaque": EmpleadoEmpaqueEdit
    };

    console.log("Datos de actualizar " + this.BuscarEvalor, ' ', TipoEmpaqueEdit, ' ', JugueteEmpaqueEdit, ' ', EmpleadoEmpaqueEdit);
    this.juguetesService.updateTipEmpaque(cadenaup).then
    (
      res => {
        console.log("res  ", res)
      }
    ).catch(err => {
      console.log(err)
    });

    this.BuscarEvalor = 0;
    this.ActualizarEmpaque.reset();

  }

  ngOnInit(): void {

    //LISTAR EMPAQUE
    this.ListaEmpaque = this.formBuilder.group({});

    //LISTAR EMPAQUE POR ID
    this.filtraridempaque = this.formBuilder.group({
      combofiltro: [],
    });

    //INSERTAR EMPAQUE
    this.InsertarEmpaque = this.formBuilder.group({
      TipEmpa: [],
      JugueteEmp: [],
      EmpleaEmpa: [],
    });
    this.formBuilder.group;

    //ACTUALIZAR EMPAQUE
    this.ActualizarEmpaque = this.formBuilder.group({
      BuscarIdEmpaqueE: [],
      TipEmpaE: [],
      JugueteEmpE: [],
      EmpleaEmpaE: [],
    });
    this.formBuilder.group;


  }

}
