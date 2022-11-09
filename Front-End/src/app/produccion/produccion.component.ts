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


  constructor(private formBuilder: FormBuilder,
              private juguetesService: JuguetesService,
              Router: Router) {
  }

  public LimpiarLista() {
    this.controlLista = 0;
  }

  public getEmpaquetamiento(op: any) {
    if (this.controlLista == 1) {

      this.juguetesService.getTipProJuguetes().subscribe((data: any) => {

        if (op == 1) {

          this.Produccion = JSON.parse(data);
          this.TituloProducc = 'Lista de Producción';
          this.TablaProduccion[0] = 'Id Empaque';
          this.TablaProduccion[1] = 'Empleados por producción';
          this.TablaProduccion[2] = 'Juguete Producido';
          this.TablaProduccion[3] = 'Fecha de Producción';
          this.TablaProduccion[4] = 'Detalle de Producción';
          this.TablaProduccion[5] = 'Errores de Producción';
          this.TablaProduccion[6] = 'Cantidad Producida';
          this.TablaProduccion[7] = 'Material utilizado';


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

  ngOnInit(): void {
    //LISTAR PRODUCCION
    this.ListaProduccion = this.formBuilder.group({});
  }

}
