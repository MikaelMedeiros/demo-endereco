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
    console.log('Uhul!');
    this.montarMenuDeNavegacao();
  }

  private montarMenuDeNavegacao() {
    this.menu = [
      { label: 'Estado', icon: 'fa fa-fw fa-calendar', routerLink: './estado' },       
      { label: 'Cidade', icon: 'fa fa-fw fa-bar-chart', routerLink: './cidade' },
  ];
  }

}
