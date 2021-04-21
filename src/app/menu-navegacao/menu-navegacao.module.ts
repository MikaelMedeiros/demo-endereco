import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuNavegacaoRoutingModule } from './menu-navegacao-routing.module';
import { MenuComponent } from './menu/menu.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule,
    MenuNavegacaoRoutingModule,
    TabMenuModule
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuNavegacaoModule { }
