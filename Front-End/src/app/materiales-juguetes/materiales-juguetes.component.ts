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
  selector: 'app-materiales-juguetes',
  templateUrl: './materiales-juguetes.component.html',
  styleUrls: ['./materiales-juguetes.component.css']
})
export class MaterialesJuguetesComponent implements OnInit {
  title = 'Materiales de los Juguetes';
  MaterialesJuguetes: any = [];
  TituloMaterialesJuguetes = ''; //Titulo Lista de Tipos de MaterialesJuguetess
  TablaMaterialesJuguetes: any = []; //Encabezados tabla Lista de Tipos de MaterialesJuguetess

  controlLista = 1; //Control para limpiar la lista
  BuscarEvalor = 1; //Control para carga del valor a buscar

  MiMaterialesJuguetes: any = []; //Tipo de MaterialesJuguetes Buscado
  TituloMaterialesJ = ''; //Titulo de Tipo de MaterialesJuguetes Buscado
  TabBusMaterialesJuguetes: any = []; //Encabezados tabla Tipo de MaterialesJuguetes Buscado
  comboListaMaterialesJuguetes: any = []; //Combo Buscar Tipo de MaterialesJuguetes
  TablaJuguetes: any = [];
  TablaMateriales: any = [];

  TituloMaterielesJuguetesEdit = ''; //Titulo de Tipo de MaterialesJuguetes a Editar
  MiMaterielesJueguetesE: any = []; //Tipo de MaterialesJuguetes a Editar
  comboEditarMaterielesJuguetes: any = []; //Combo Editar Tipo de MaterialesJuguetes

  //*****************************************************************************
  //Form group
  //Mostrar Lista MATERIALES JUGUETES
  ListaMaterialesJuguetes = new FormGroup({});

  //BUSCAR MatelialesJuguetes POR ID
  filtrarIdMaterialesJuguetes = new FormGroup({
    combofiltro: new FormControl(),
  });

  //INSERTAR NUEVO EMPAQUE
  InsertarMateriJuguetes = new FormGroup({
    Id_juguetes: new FormControl(),
    Id_material: new FormControl(),
    Descripcion: new FormControl(),
    Cantidad: new FormControl(),
  });

  //ACTUALIZAR MATERIALES JUGUETES
  ActualizarMj = new FormGroup({
    BuscarIdMaJu: new FormControl(),
    Id_juguetes_E: new FormControl(),
    Id_material_E: new FormControl(),
    Descripcion_E: new FormControl(),
    Cantidad_E: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
              private juguetesService: JuguetesService,
              Router: Router) {
  }

  public LimpiarLista() {
    this.controlLista = 0;
  }

  public getMaterialesJuguetesM(op: any) {
    if (this.controlLista == 1) {
      this.juguetesService.getTipMaterialJuguetes().subscribe((data: any) => {
        if (op == 1) {

          this.MaterialesJuguetes = JSON.parse(data);
          this.TituloMaterialesJ = 'Lista de Materiales de los Juguetes';
          this.TablaMaterialesJuguetes[0] = 'Id Material de los Juguetes';
          this.TablaMaterialesJuguetes[1] = 'Juguete';
          this.TablaMaterialesJuguetes[2] = 'Material';
          this.TablaMaterialesJuguetes[3] = 'Descripción';
          this.TablaMaterialesJuguetes[4] = 'Cantidad';

        } else if (op == 2) {
          this.comboListaMaterialesJuguetes = JSON.parse(data);
          this.MiMaterialesJuguetes = null;
          this.TituloMaterialesJ = '';
          this.TabBusMaterialesJuguetes[0] = '';
          this.TabBusMaterialesJuguetes[1] = '';
          this.TabBusMaterialesJuguetes[2] = '';
          this.TabBusMaterialesJuguetes[3] = '';
          this.TabBusMaterialesJuguetes[4] = '';

        }else if(op == 3){
          this.comboEditarMaterielesJuguetes = JSON.parse(data);
          this.MiMaterielesJueguetesE = null;
        }
      });
    } else {
      this.TituloMaterialesJ = '';
      this.MaterialesJuguetes = null;
      this.TablaMaterialesJuguetes[0] = '';
      this.TablaMaterialesJuguetes[1] = '';
      this.TablaMaterialesJuguetes[2] = '';
      this.TablaMaterialesJuguetes[3] = '';
      this.TablaMaterialesJuguetes[4] = '';
      this.controlLista = 1;
    }
  }

  //BUSCAR MATERIALES JUGUETES POR ID
  public getEmpaqueId() {
    let filtovalor = this.filtrarIdMaterialesJuguetes.getRawValue()['combofiltro'];
    console.log('318    ' + filtovalor);
    this.juguetesService.getTipMaterialJuguete('/' + filtovalor).subscribe(
      (data: {}) => {
        console.log('313    ' + filtovalor);

        this.MiMaterialesJuguetes = data;
        this.TituloMaterialesJ = 'Lista de Materiales de los Juguetes';
        this.TabBusMaterialesJuguetes[0] = 'Id Material de los Juguetes';
        this.TabBusMaterialesJuguetes[1] = 'Juguete';
        this.TabBusMaterialesJuguetes[2] = 'Material';
        this.TabBusMaterialesJuguetes[3] = 'Descripción';
        this.TabBusMaterialesJuguetes[4] = 'Cantidad';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public consultarJuguete() {
    this.juguetesService.getTipJuguetess().subscribe((data: any) => {
      this.TablaJuguetes = JSON.parse(data);
    });
  }

  public consultarMaterial() {
    this.juguetesService.getTipMateriales().subscribe((data: any) => {
      this.TablaMateriales = JSON.parse(data);
    });
  }

  //INSERTAR NUEVO MATERIALES JUGUETES
  public InsertarMaterialesJuguetes() {
    let Id_juguetes1 = this.InsertarMateriJuguetes.getRawValue()['Id_juguetes'];
    let Id_material1 = this.InsertarMateriJuguetes.getRawValue()['Id_material'];
    let Descripcion1 = this.InsertarMateriJuguetes.getRawValue()['Descripcion'];
    let Cantidad1 = this.InsertarMateriJuguetes.getRawValue()['Cantidad'];

    let cadenaup = {
      "Id_juguetes": Id_juguetes1,
      "Id_material": Id_material1,
      "Descripcion": Descripcion1,
      "cantidad": Cantidad1
    };

    this.juguetesService.insertTipMaterialJuguete(cadenaup).then
    (res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });

    this.InsertarMateriJuguetes.reset();
  }

  //METODO PARA EDITAR MATERIALES JUGUETES
  public BuscarMaJuEdi() {
    if (this.BuscarEvalor != 0) {
      this.BuscarEvalor = this.ActualizarMj.getRawValue()['BuscarIdMaJu'];
    }
    this.juguetesService.getTipMaterialJuguete('/' + this.BuscarEvalor).subscribe((data: {}) => {

      this.MiMaterielesJueguetesE = data;
      console.log(this.MiMaterielesJueguetesE);
      console.log("hasta aqui va bien " + this.BuscarEvalor);
    }, error => {
      console.log(error)
    });

  }

  //EDITAR MATERIALES JUGUETES
  public EditarMaterialesJuguetes() {

    let Id_juguetes_E_C = this.ActualizarMj.getRawValue()['Id_juguetes_E'];
    let Id_material_E_C = this.ActualizarMj.getRawValue()['Id_material_E'];
    let Descripcion_E_C = this.ActualizarMj.getRawValue()['Descripcion_E'];
    let Cantidad_E_C = this.ActualizarMj.getRawValue()['Cantidad_E'];

    let cadenaup = {
      "Id_materiales_productos": this.BuscarEvalor,
      "Id_juguetes": Id_juguetes_E_C,
      "Id_material": Id_material_E_C,
      "Descripcion": Descripcion_E_C,
      "cantidad": Cantidad_E_C
    };

    this.juguetesService.updateTipMateralJuguete(cadenaup).then
    (res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    });

    this.ActualizarMj.reset();
  }

  ngOnInit(): void {

    //LISTAR MATERIALES JUGUETES
    this.ListaMaterialesJuguetes = this.formBuilder.group({});

    //BUSCAR MATERIALES JUGUETES POR ID
    this.filtrarIdMaterialesJuguetes = this.formBuilder.group({
      combofiltro: [],
    })

    //INSERTAR NUEVO MATERIALES JUGUETES
    this.InsertarMateriJuguetes = this.formBuilder.group({
      Id_juguetes: [],
      Id_material: [],
      Descripcion: [],
      Cantidad: [],
    });
    this.formBuilder.group;

    //ACTUALIZAR MATERIALES JUGUETES
    this.ActualizarMj = this.formBuilder.group({
      BuscarIdMaJu: [],
      Id_juguetes_E: [],
      Id_material_E: [],
      Descripcion_E: [],
      Cantidad_E: [],
    });
  }
}
