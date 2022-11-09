import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {JuguetesService} from '../juguetes.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  title = "MANEJO DE CATALOGOS";
  TipCatalogoE: any = [];               //Lista de Tipos de Empleado
  TituloCatalogoE: any = [];          //Titulo Lista de Tipos de Empleado
  tablaCatalogoE: any = [];           //Encabezados tabla Lista de Tipos de Empleado
  MiTipCatalogoEs: any = [];

  TipCatalogo: any = [];               //Lista de Tipos de Empleado
  TituloCatalogo: any = [];          //Titulo Lista de Tipos de Empleado
  tablaCatalogo: any = [];           //Encabezados tabla Lista de Tipos de Empleado

  MiTipCatalogo: any = [];             //Tipo de Documento Buscado
  TituloTipCatalogo = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipCatalogo: any = [];        //Encabezados tabla Tipo de Documento Buscado
  comboListaTipCatalogo: any = [];     //Combo Buscar Tipo de Documento

  MiTipCatalogos: any = [];             //Tipo de Documento Buscado
  TituloTipCatalogos = "";              //Titulo de Tipo de Documento Buscado
  TabBusTipCatalogos: any = [];        //Encabezados tabla Tipo de Documento Buscado
  comboListaCatalogos: any = [];
  comboListaDocum: any = [];
//cargos-------------------------
  MiTipCatalogoCar: any = [];
  comboListaCargo: any = [];
  TituloTipCargo: any = [];
  TabBusTipCargo: any = [];
//colores-------------------------
  MiTipCatalogoColor: any = [];
  comboListaColor: any = [];
  TituloTipColor: any = [];
  TabBusTipColor: any = [];
//TipoProducto-------------------------
  MiTipCatalogoTipoProducto: any = [];
  comboListaTipoProducto: any = [];
  TituloTipTipoProducto: any = [];
  TabBusTipTipoProducto: any = [];
//TipoMaterial-------------------------
  MiTipCatalogoMaterial: any = [];
  comboListaMaterial: any = [];
  TituloTipMaterial: any = [];
  TabBusTipMaterial: any = [];
//TipoMaterial-------------------------
  MiTipCatalogoEmpaque: any = [];
  comboListaEmpaque: any = [];
  TituloTipEmpaque: any = [];
  TabBusTipEmpaque: any = [];
//TipoContacto-------------------------
  MiTipCatalogoContacto: any = [];
  comboListaContacto: any = [];
  TituloTipContacto: any = [];
  TabBusTipContacto: any = [];
//editar-------------------------
  TituloTipCatalogoEdit = "";          //Titulo de Tipo de Documento a Editar
  MiTipCatalogoE: any = [];            //Tipo de Documento a Editar
  comboEditarTipCatalogo: any = [];    //Combo Editar Tipo de Documento

  controlLista = 1;               //Control para limpiar la lista
  BuscarEvalor = 1;

  //*****************************************************************************
  //Form group
  ListaCatalogo = new FormGroup(
    {});
  ListaCatalogoE = new FormGroup(
    {});
  filtrarTipCatalogoE = new FormGroup(
    {
      combofiltro: new FormControl()
    });
  filtrarTipCatalogoD = new FormGroup(
    {
      combofiltro2: new FormControl()
    });
  filtrarTipCatalogoCargo = new FormGroup(
    {
      combofiltroCargo: new FormControl()
    });
  filtrarTipCatalogoColor = new FormGroup(
    {
      combofiltroColor: new FormControl()
    });
  filtrarTipCatalogoTipoProducto = new FormGroup(
    {
      combofiltroTipoProducto: new FormControl()
    });
  filtrarTipCatalogoMaterial = new FormGroup(
    {
      combofiltroMaterial: new FormControl()
    });
  filtrarTipCatalogoEmpaque = new FormGroup(
    {
      combofiltroEmpaque: new FormControl()
    });
  filtrarTipCatalogoContacto = new FormGroup(
    {
      combofiltroContacto: new FormControl()
    });
  InsertarGTipCatalogo = new FormGroup(
    {
      combofiltro: new FormControl(),
      textDenominacio: new FormControl(),
      textCatalogo: new FormControl(),

    });


  constructor(
    private formBuilder: FormBuilder,
    private servi: JuguetesService,
    Router: Router
  ) {
  }

  //..............................................................................................
// CRUD
//............................................................................................
// Lista Tipos de documentos. inicial


  public consultaCatalogoI() {

    this.servi.getTipCatalogos().subscribe((data: any) => {
      //let dat = data;

      this.TipCatalogo = JSON.parse(data);//data;
      this.TituloCatalogo = ' Listar Materiales';
      this.tablaCatalogo[0] = 'Indicador';
      this.tablaCatalogo[1] = 'Denominación';
      this.tablaCatalogo[2] = 'Nombre Juguete';

    });
  }

//filtros listas
//-----catalogos----
  public ListComboCatalogo() {
    this.servi.getTipCatalogoE('/' + 1).subscribe((data: {}) => {
        this.comboListaCatalogos = data;
        console.log("por aca 23 " + this.comboListaCatalogos.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//-----documentos----
  public ListComboDocu() {
    this.servi.getTipCatalogoE('/' + 2).subscribe((data: {}) => {
        this.comboListaDocum = data;
        console.log("por aca 23 " + this.comboListaDocum.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

  //-----cargos----
  public ListComboCargo() {
    this.servi.getTipCatalogoE('/' + 3).subscribe((data: {}) => {
        this.comboListaCargo = data;
        console.log("por aca 23 " + this.comboListaCargo.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

  //------colores---
  public ListCombocolor() {
    this.servi.getTipCatalogoE('/' + 15).subscribe((data: {}) => {
        this.comboListaColor = data;
        console.log("por aca 23 " + this.comboListaColor.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//------TipoProducto-----
  public ListComboTipoProducto() {
    this.servi.getTipCatalogoE('/' + 17).subscribe((data: {}) => {
        this.comboListaTipoProducto = data;
        console.log("por aca 23 " + this.comboListaTipoProducto.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//------TipoMaterial-----
  public ListComboTipoMaterial() {
    this.servi.getTipCatalogoE('/' + 28).subscribe((data: {}) => {
        this.comboListaMaterial = data;
        console.log("por aca 23 " + this.comboListaMaterial.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//------TipoEmpaque-----
  public ListComboTipoEmpaque() {
    this.servi.getTipCatalogoE('/' + 38).subscribe((data: {}) => {
        this.comboListaEmpaque = data;
        console.log("por aca 23 " + this.comboListaEmpaque.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//------TipoEmpaque-----
  public ListComboTipoContacto() {
    this.servi.getTipCatalogoE('/' + 6).subscribe((data: {}) => {
        this.comboListaContacto = data;
        console.log("por aca 23 " + this.comboListaContacto.denominacion_universal)
      },
      error => {
        console.log(error)
      });
  };

//............................................................................................
// Lista catalogo total.

  public consultaCatalogo(op: any) {
    console.error(" El listado 1 ");
    if (this.controlLista == 1) {
      console.log("component")
      this.servi.getTipCatalogos().subscribe((data: any) => {
          console.error(" El listado 2 ");
          if (op == 1) {
            //let dat = data;

            this.TipCatalogo = JSON.parse(data);
            this.TituloCatalogo = "LISTA DE Juguetes";
            this.tablaCatalogo[0] = "indicador";
            this.tablaCatalogo[1] = "Denominacion";
            this.tablaCatalogo[2] = "Grupo";

            //console.error(" El listado 3 " + this.TipDocs);
          } else if (op == 2) {
            this.comboListaTipCatalogo = JSON.parse(data);
            this.MiTipCatalogo = null;
            this.TituloTipCatalogo = "";
            this.TabBusTipCatalogo[0] = "";
            this.TabBusTipCatalogo[1] = "";
            this.TabBusTipCatalogo[2] = "";

            //console.error(" El listado 4 " );
          } else if (op == 3) {
            this.comboEditarTipCatalogo = JSON.parse(data);
            this.MiTipCatalogoE = null;
            this.TituloTipCatalogoEdit = "";
            // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
            // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
            console.error(" El listado 5 ");
          }

        },
        error => {
          console.error(error + " ")
        });
    } else {
      this.TipCatalogo = null;
      this.TituloCatalogo = "";
      this.tablaCatalogo[0] = "";
      this.tablaCatalogo[1] = "";
      this.tablaCatalogo[2] = "";
      this.controlLista = 1;
    }

  }


//--------------------------------------------------------------------------------------------->
//para Limpiar la lista

  public LimpiarLista() {
    this.controlLista = 0;
  }

  public LimpiarListaE() {
    this.controlLista = 0;
  }

// -----------------------------------------------------------------------------------------
// Consulta un tipo de documento por medio de su id.

  public buscarTipCatalogo() {

    var filtovalor = this.filtrarTipCatalogoE.getRawValue()['combofiltro'];
//console.log("318    " + filtovalor );
    this.servi.getTipCatalogosa('/' + filtovalor).subscribe((data: {}) => {
        console.log("313    " + filtovalor);

        this.MiTipCatalogo = data;


        //console.log("la data es: " + data);
        //console.log("MiTipEmpleado es: " + this.MiTipCatalogo);
        //console.log("MiTipJugute es: " + this.MiTipCatalogo[0].Id_catalogo_universal/* + " - " + this.MiTipEmpleado[0].tipo_documento + " - " + this.MiTipEmpleado[0].Numero_Documento+ " - " + this.MiTipEmpleado[0].Persona*/);

        this.TituloTipCatalogo = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipCatalogo[0] = "indicador";
        this.TabBusTipCatalogo[1] = "Denominacion";
        this.TabBusTipCatalogo[2] = "Grupo";

      },
      error => {
        console.log(error)
      });

  }

// -----------------------------------------------------------------------------------------
// Consulta un tipo de documento por medio de su id.

  public buscarTipCatalogo2() {
    var filtovalor = this.filtrarTipCatalogoD.getRawValue()['combofiltro2'];

    this.servi.getTipCatalogosa('/' + 2 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogos = data;
        this.TituloTipCatalogos = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipCatalogos[0] = "indicador";
        this.TabBusTipCatalogos[1] = "Denominacion";
        this.TabBusTipCatalogos[2] = "Grupo";
        this.TabBusTipCatalogos[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

// -----------------------------------------------------------------------------------------
// Consulta un tipo de cargos por medio de su id.

  public buscarTipCatalogoCargos() {
    var filtovalor = this.filtrarTipCatalogoCargo.getRawValue()['combofiltroCargo'];

    this.servi.getTipCatalogosa('/' + 3 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoCar = data;
        this.TituloTipCargo = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipCargo[0] = "indicador";
        this.TabBusTipCargo[1] = "Denominacion";
        this.TabBusTipCargo[2] = "Grupo";
        this.TabBusTipCargo[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

  public buscarTipCatalogoColor() {
    var filtovalor = this.filtrarTipCatalogoColor.getRawValue()['combofiltroColor'];

    this.servi.getTipCatalogosa('/' + 15 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoColor = data;
        this.TituloTipColor = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipColor[0] = "indicador";
        this.TabBusTipColor[1] = "Denominacion";
        this.TabBusTipColor[2] = "Grupo";
        this.TabBusTipColor[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

  public buscarTipCatalogoTipoProducto() {
    var filtovalor = this.filtrarTipCatalogoTipoProducto.getRawValue()['combofiltroTipoProducto'];

    this.servi.getTipCatalogosa('/' + 17 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoTipoProducto = data;
        this.TituloTipTipoProducto = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipTipoProducto[0] = "indicador";
        this.TabBusTipTipoProducto[1] = "Denominacion";
        this.TabBusTipTipoProducto[2] = "Grupo";
        this.TabBusTipTipoProducto[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

  public buscarTipCatalogoMaterial() {
    var filtovalor = this.filtrarTipCatalogoMaterial.getRawValue()['combofiltroMaterial'];

    this.servi.getTipCatalogosa('/' + 28 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoMaterial = data;
        this.TituloTipMaterial = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipMaterial[0] = "indicador";
        this.TabBusTipMaterial[1] = "Denominacion";
        this.TabBusTipMaterial[2] = "Grupo";
        this.TabBusTipMaterial[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

  public buscarTipCatalogoEmpaque() {
    var filtovalor = this.filtrarTipCatalogoEmpaque.getRawValue()['combofiltroEmpaque'];

    this.servi.getTipCatalogosa('/' + 38 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoEmpaque = data;
        this.TituloTipEmpaque = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipEmpaque[0] = "indicador";
        this.TabBusTipEmpaque[1] = "Denominacion";
        this.TabBusTipEmpaque[2] = "Grupo";
        this.TabBusTipEmpaque[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

  public buscarTipCatalogoContacto() {
    var filtovalor = this.filtrarTipCatalogoContacto.getRawValue()['combofiltroContacto'];

    this.servi.getTipCatalogosa('/' + 6 + '/' + filtovalor).subscribe((data: {}) => {
        this.MiTipCatalogoContacto = data;
        this.TituloTipContacto = "TIPO Catalogo SELECCIONADO";
        this.TabBusTipContacto[0] = "indicador";
        this.TabBusTipContacto[1] = "Denominacion";
        this.TabBusTipContacto[2] = "Grupo";
        this.TabBusTipContacto[3] = "indicador de Grupo";
      },
      error => {
        console.log(error)
      });
  }

//--------------------------------------------------------------
  //Para insertar un nuevo elemento a catalogo

  public InsertarTipCatalogo() {

    var datosvalo1 = this.InsertarGTipCatalogo.getRawValue()['textDenominacio'];
    var datosvalo2 = this.InsertarGTipCatalogo.getRawValue()['textCatalogo'];

    var cadena = {"denominacion_universal": datosvalo1, "catalogo_universal": datosvalo2,};


    this.servi.insertTipCatalogo(cadena).then
    (res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });
    this.InsertarGTipCatalogo.reset();
  }

  ngOnInit(): void {
    this.ListaCatalogo = this.formBuilder.group(
      {});

    this.formBuilder.group
    this.filtrarTipCatalogoE = this.formBuilder.group(
      {
        combofiltro: []
      });
    this.filtrarTipCatalogoD = this.formBuilder.group(
      {
        combofiltro2: []
      });
    this.filtrarTipCatalogoCargo = this.formBuilder.group(
      {
        combofiltroCargo: []
      });
    this.filtrarTipCatalogoColor = this.formBuilder.group(
      {
        combofiltroColor: []
      });
    this.filtrarTipCatalogoTipoProducto = this.formBuilder.group(
      {
        combofiltroTipoProducto: []
      });
    this.filtrarTipCatalogoMaterial = this.formBuilder.group(
      {
        combofiltroMaterial: []
      });
    this.filtrarTipCatalogoEmpaque = this.formBuilder.group(
      {
        combofiltroEmpaque: []
      });
    this.filtrarTipCatalogoContacto = this.formBuilder.group(
      {
        combofiltroContacto: []
      });

    this.InsertarGTipCatalogo = this.formBuilder.group(
      {
        combofiltro: [],
        textDenominacio: [],
        textCatalogo: [],

      });
    this.formBuilder.group
    this.ListaCatalogoE = this.formBuilder.group(
      {});
  }

}
