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
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  title = 'Contactos';
  Contactos: any = []; //Lista de Tipos de Documentos
  TituloContacto = ''; //Titulo Lista de Tipos de Documentos
  TablaContacto: any = []; //Encabezados tabla Lista de Tipos de Documentos

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiContacto: any = []; //Tipo de Documento Buscado
  TituloContact = ''; //Titulo de Tipo de Documento Buscado
  TabBusContacto: any = []; //Encabezados tabla Tipo de Documento Buscado
  comboListaContacto: any = []; //Combo Buscar Tipo de Documento

  TituloContactoEdit = ''; //Titulo de Tipo de Documento a Editar
  MiContactoE: any = []; //Tipo de Documento a Editar
  comboEditarContacto: any = []; //Combo Editar Tipo de Documento

  //*****************************************************************************
  //Form group
  ListaContacto = new FormGroup({});
  filtraridcontacto =  new FormGroup(
    {
      combofiltro: new FormControl()
    });

  constructor(
    private formBuilder: FormBuilder,
    private juguetesService: JuguetesService,
    Router: Router
  ) { }

  //..............................................................................................
  // CRUD
  //............................................................................................
  // Lista Tipos de documentos. inicial

  public consultarcontactosI() {
    
    this.juguetesService.getTipContacs().subscribe((data: any) => {
     // let dat = data;
    
      this.Contactos = JSON.parse(data);//data; 
      this.TituloContacto = ' Listar Contactos';
      this.TablaContacto[0] = 'indicador';
      this.TablaContacto[1] = 'Denominación';
      this.TablaContacto[2] = 'Iniciales';
      this.TablaContacto[3] = 'Direccion';
    });
  }

  public consultarcontactos(op: any) {
    //console.error(" El listado 1 " );
    //console.error(" El listado 2 "+ data );
    if (this.controlLista == 1) {
      //console.log("component")
      this.juguetesService.getTipContacs().subscribe(
        (data: any) => {
          console.error(" El listado 2 "+ data );
          if (op == 1) {
           // let dat = data;

            this.Contactos = JSON.parse(data);
            this.TituloContacto = 'Lista de  Contactos';
            this.TablaContacto[0] = 'Id Contacto';
            this.TablaContacto[1] = 'Numero Documento';
            this.TablaContacto[2] = 'Nombre y Apellido';
            this.TablaContacto[3] = 'Tipo de contacto';
            this.TablaContacto[4] = 'Datos de contacto';
            //console.error(" El listado 3 " + this.TipDocs);
          } else if (op == 2) {
            this.comboListaContacto = JSON.parse(data);
            this.MiContacto = null;
            this.TituloContact = '';
            this.TabBusContacto[0] = '';
            this.TabBusContacto[1] = '';
            this.TabBusContacto[2] = '';
            this.TabBusContacto[3] = '';
            this.TabBusContacto[4] = '';

            //console.error(" El listado 4 " );
          } else if (op == 3) {
            this.comboEditarContacto = JSON.parse(data);
            this.MiContactoE = null;
            this.TituloContactoEdit = '';
            // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
            // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
            console.error(' El listado 5 ');
          }
        },
        (error) => {
          console.error(error + 'nuevo ');
        }
      );
    } else {
      this.TituloContacto = '';
      this.Contactos = null;
      this.TablaContacto[0] = '';
      this.TablaContacto[1] = '';
      this.TablaContacto[2] = '';
      this.TablaContacto[3] = '';
      this.TablaContacto[4] = '';
      this.controlLista = 1;
    }
  }

  //--------------------------------------------------------------------------------------------->
  //para Limpiar la lista

  public LimpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
    this.ListaContacto = this.formBuilder.group({});
    this.filtraridcontacto = this.formBuilder.group(
      {
        combofiltro: []
      });
  }
}
