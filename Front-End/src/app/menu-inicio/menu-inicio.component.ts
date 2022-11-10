import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {
  title = "MANEJO DE EMPLEADOS";
  constructor() { }

  ngOnInit(): void {
  }

}
