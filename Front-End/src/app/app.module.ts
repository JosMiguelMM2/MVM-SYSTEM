import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AppRoutingModule } from './app-routing.module';
import { HttpModule, } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';


const appRoutes: Routes = [
  { path: 'menu-inicio', 
  component: MenuInicioComponent },
  { path: '',
    redirectTo: '/menu-inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
