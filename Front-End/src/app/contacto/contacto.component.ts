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

  //BUSCAR CONTACTO POR ID
  filtraridcontacto = new FormGroup({
    combofiltro: new FormControl(),
  });

  //insertar nuevo contacto
  InsertarContacto = new FormGroup({
    numberidempleados: new FormControl(),
    numberidtipcontacto: new FormControl(),
    textdatocontacto: new FormControl(),
  });

  ActualizarContacto = new FormGroup(
    {
      BuscarIdContactoE: new FormControl(),
      nuidemple: new FormControl(),
      nuidtipcontac: new FormControl(),
      nudatcontac: new FormControl(),
    });


  constructor(
    private formBuilder: FormBuilder,
    private juguetesService: JuguetesService,
    Router: Router
  ) { }

  
  public consultarcontactos(op: any) {
    //console.error(" El listado 1 " );
    //console.error(" El listado 2 "+ data );
    if (this.controlLista == 1) {
      //console.log("component")
      this.juguetesService.getTipContacs().subscribe(
        (data: any) => {
          //console.error(' El listado 2 ' + data);
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

  // -----------------------------------------------------------------------------------------
  // Consulta un tipo de documento por medio de su id.

  public buscarContacto() {
    let filtovalor = this.filtraridcontacto.getRawValue()['combofiltro'];
    console.log('318    ' + filtovalor);
    this.juguetesService.getTipContac('/' + filtovalor).subscribe(
      (data: {}) => {
        console.log('313    ' + filtovalor);

        this.MiContacto = data;

        // console.log("la data es " + data);
        // console.log("MiTipDoc es " + this.MiTipDoc);
        //console.log("MiTipDoc es " + this.MiTipDoc[0].id_tip_doc + " - " + this.MiTipDoc[0].tipo_documento + " - " + this.MiTipDoc[0].iniciales_tip_doc);

        this.TituloContact = 'Buscar Contactos';
        this.TabBusContacto[0] = 'Id Contacto';
        this.TabBusContacto[1] = 'Numero Documento';
        this.TabBusContacto[2] = 'Nombre y Apellido';
        this.TabBusContacto[3] = 'Tipo de contacto';
        this.TabBusContacto[4] = 'Datos de contacto';
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // -----------------------------------------------------------------------------------------
  // Inserta un nuevo Contacto.
  public InsertarnuevoContacto() {
    let datosvalo1 = this.InsertarContacto.getRawValue()['numberidempleados'];
    let datosvalo2 = this.InsertarContacto.getRawValue()['numberidtipcontacto'];
    let datosvalo3 = this.InsertarContacto.getRawValue()['textdatocontacto'];
    
    let cadena = { "Id_empleados": datosvalo1, "Tipo_contacto": datosvalo2, "Dato_contacto": datosvalo3 };

    this.juguetesService.insertTipContac(cadena).then
      (res => {
        console.log(res)
      }
      ).catch(err => {
        console.log(err)
      });
    this.InsertarContacto.reset();
    console.log('318    ' + datosvalo1 + ' - ' + datosvalo2 + ' - ' + datosvalo3);
  }

  //----------------------------------------------------------------------------
  // Consulta un tipo de contacto por medio de su id para editarlo

  buscarEditarContacto() {
    if (this.BuscarEvalor != 0) {
      this.BuscarEvalor = this.ActualizarContacto.getRawValue()['BuscarIdContactoE'];
      //console.error(" dos el filtro " + this.BuscarEvalor);
    }
    
    //console.error(" tres el filtro " + this.BuscarEvalor);
    //console.log(" aca 33 " + this.BuscarEvalor);
    this.juguetesService.getTipContac('/' + this.BuscarEvalor).subscribe((data: {}) => {

      this.MiContactoE = data;
      this.TituloContactoEdit = "TIPO DE CONTACTO A EDITAR";
      console.log("hasta aqui va bien "+ this.BuscarEvalor);
    }, error => { console.log(error) });
    

  }



  //--------------------------------------------------------------
  // Actualiza el Contacto 

  public ActualizarTipContacto() {
    
    let nuevonumberidempleados = this.ActualizarContacto.getRawValue()['nuidemple'];
    let nuevonumberidtipcontact = this.ActualizarContacto.getRawValue()['nuidtipcontac'];
    let nuevotextdatocontacto = this.ActualizarContacto.getRawValue()['nudatcontac'];

    let cadenaup = { "Id_contactos": this.BuscarEvalor, "Id_empleados": nuevonumberidempleados, "Tipo_contacto": nuevonumberidtipcontact, "Dato_contacto": nuevotextdatocontacto };
    console.log("hasta aqui va bien 2 " + this.BuscarEvalor);
    console.log("hasta aqui va bien 3 " + nuevonumberidempleados);
    console.log("hasta aqui va bien 4 " + nuevonumberidtipcontact);
    console.log("hasta aqui va bien 5 " + nuevotextdatocontacto);
    
    this.juguetesService.updateTipContac(cadenaup).then
      (
        res => {
          console.log("res  ", res)
        }
      ).catch(err => {
        console.log(err)
      });
      
    this.BuscarEvalor = 0;
    this.ActualizarContacto.reset();

 }

  //-------------------------------------------------------
  ngOnInit(): void {
    this.ListaContacto = this.formBuilder.group({});
    
    this.filtraridcontacto = this.formBuilder.group({
      combofiltro: [],
    });

    this.InsertarContacto = this.formBuilder.group({
      numberidempleados: [],
      numberidtipcontacto: [],
      textdatocontacto: [],
    });
    this.formBuilder.group;

    this.ActualizarContacto = this.formBuilder.group({
      BuscarIdContactoE: [],
      nuidemple: [],
      nuidtipcontac: [],
      nudatcontac: [],
    }); this.formBuilder.group;
  }
}
