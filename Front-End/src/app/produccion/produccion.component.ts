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
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {
  title = 'Producción de Juguetes';
  Produccion: any = [];
  TituloProduccion = ''; //Titulo Lista de Tipos de Empaques
  TablaProduccion: any = []; //Encabezados tabla Lista de Tipos de Empaques

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiProduccion: any = []; //Tipo de Empaque Buscado
  TituloProducc = ''; //Titulo de Tipo de Empaque Buscado
  TabBusProduccion: any = []; //Encabezados tabla Tipo de Empaque Buscado
  comboListaProduccion: any = []; //Combo Buscar Tipo de Empaque

  TituloProduccionEdit = ''; //Titulo de Tipo de Empaque a Editar
  MiProduccionE: any = []; //Tipo de Empaque a Editar
  comboEditarProduccion: any = []; //Combo Editar Tipo de Empaque

  //*****************************************************************************
  //Form group
  //MOSTRAR PRODUCCION

  ListaProduccion = new FormGroup({});

  filtrarProduccion = new FormGroup({
    combofiltro: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
              private juguetesService: JuguetesService,
              Router: Router) {
  }

  public LimpiarLista() {
    this.controlLista = 0;
  }

  public getProduccion(op: any) {
    if (this.controlLista == 1) {

      this.juguetesService.getTipProJuguetes().subscribe((data: any) => {

        if (op == 1) {

          this.Produccion = JSON.parse(data);
          this.TituloProduccion = 'Lista de Producción';
          this.TablaProduccion[0] = 'Id Empaque';
          this.TablaProduccion[1] = 'Empleados por producción';
          this.TablaProduccion[2] = 'Juguete Producido';
          this.TablaProduccion[3] = 'Fecha de Producción';
          this.TablaProduccion[4] = 'Detalle de Producción';
          this.TablaProduccion[5] = 'Errores de Producción';
          this.TablaProduccion[6] = 'Cantidad Producida';
          this.TablaProduccion[7] = 'Material utilizado';


        }else if (op==2){
          this.comboListaProduccion = JSON.parse(data);
          this.MiProduccion=null;
          this.TituloProducc='';
          this.TabBusProduccion[0] = '';
          this.TabBusProduccion[1] = '';
          this.TabBusProduccion[2] = '';
          this.TabBusProduccion[3] = '';
          this.TabBusProduccion[4] = '';
          this.TabBusProduccion[5] = '';
          this.TabBusProduccion[6] = '';
          this.TabBusProduccion[7] = '';
        }
      })
    } else {
      this.TituloProducc = '';
      this.Produccion = null;
      this.TablaProduccion[0] = '';
      this.TablaProduccion[1] = '';
      this.TablaProduccion[2] = '';
      this.TablaProduccion[3] = '';
      this.TablaProduccion[4] = '';
      this.TablaProduccion[5] = '';
      this.TablaProduccion[6] = '';
      this.TablaProduccion[7] = '';
      this.controlLista = 1;
    }
  }

  public buscarIdProduccion() {
    let filtovalor = this.filtrarProduccion.getRawValue()['combofiltro'];
    console.log('318    ' + filtovalor);
    this.juguetesService.getTipProJuguetei('/' + filtovalor).subscribe(
      (data: {}) => {
        console.log('313    ' + filtovalor);

        this.MiProduccion = data;
        this.TituloProducc = 'Buscar Empaque por Id';
        this.TabBusProduccion[0] = 'Id Empaque';
        this.TabBusProduccion[1] = 'Empleados por producción';
        this.TabBusProduccion[2] = 'Juguete Producido';
        this.TabBusProduccion[3] = 'Fecha de Producción';
        this.TabBusProduccion[4] = 'Detalle de Producción';
        this.TabBusProduccion[5] = 'Errores de Producción';
        this.TabBusProduccion[6] = 'Cantidad Producida';
        this.TabBusProduccion[7] = 'Material utilizado';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    //LISTAR PRODUCCION
    this.ListaProduccion = this.formBuilder.group({});

    //FILTRAR POR ID
    this.filtrarProduccion = this.formBuilder.group({
      combofiltro: [],
    });
  }
}


