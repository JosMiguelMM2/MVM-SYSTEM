import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JuguetesService } from './juguetes.service';

import { AppComponent } from './app.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { EmpaquetamientoComponent } from './empaquetamiento/empaquetamiento.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { MaterialesJuguetesComponent } from './materiales-juguetes/materiales-juguetes.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'Inicio' },
  { path: 'Inicio', component: MenuInicioComponent },

  {
    path: 'Contactos',
    component: ContactoComponent,
  },
  {
    path: 'Empleados',
    component: EmpleadoComponent,
  },
  {
    path: 'Catalogo',
    component: CatalogoComponent,
  },
  {
    path: 'Juguetes',
    component: JuguetesComponent,
  }
];

@NgModule({
  declarations: [AppComponent, MenuInicioComponent, ContactoComponent, EmpleadoComponent, CatalogoComponent, JuguetesComponent, MaterialesComponent, EmpaquetamientoComponent, ProduccionComponent, MaterialesJuguetesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JuguetesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
