import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({  
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.montarMenuDeNavegacao();
  }

  private montarMenuDeNavegacao() {
    this.menu = [
      { label: 'Estado', icon: 'pi pi-img', routerLink: './estado' },       
      { label: 'Cidade', icon: 'pi pi-chart', routerLink: './cidade' },
  ];
  }

}
