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
  selector: 'app-materiales-juguetes',
  templateUrl: './materiales-juguetes.component.html',
  styleUrls: ['./materiales-juguetes.component.css']
})
export class MaterialesJuguetesComponent implements OnInit {
  title = 'Materiales de los Juguetes';
  MaterialesJuguetes: any = [];
  TituloMaterialesJuguetes = ''; //Titulo Lista de Tipos de Documentos
  TablaMaterialesJuguetes: any = []; //Encabezados tabla Lista de Tipos de Documentos

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiMaterialesJuguetes: any = []; //Tipo de Documento Buscado
  TituloMaterialesJ = ''; //Titulo de Tipo de Documento Buscado
  TabBusMaterialesJuguetes: any = []; //Encabezados tabla Tipo de Documento Buscado
  comboListaMaterialesJuguetes: any = []; //Combo Buscar Tipo de Documento

  TituloMaterielesJuguetesEdit = ''; //Titulo de Tipo de Documento a Editar
  MiMaterielesJueguetesE: any = []; //Tipo de Documento a Editar
  comboEditarMaterielesJuguetes: any = []; //Combo Editar Tipo de Documento

  //*****************************************************************************
  //Form group
  //Mostrar Lista MATERIALES JUGUETES
  ListaMaterialesJuguetes = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private juguetesService: JuguetesService,
    Router: Router) { }

    public LimpiarLista() {
      this.controlLista = 0;
    }

    public getMaterialesJuguetes(op:any){
      if(this.controlLista==1){
        
      }
    }

  ngOnInit(): void {

    //LISTAR MATERIALES JUGUETES
    this.ListaMaterialesJuguetes = this.formBuilder.group({});


  }
}
