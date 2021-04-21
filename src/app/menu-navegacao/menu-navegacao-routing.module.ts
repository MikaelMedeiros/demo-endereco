import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { 
        path: 'estado',
        loadChildren: './estado/estado.module#EstadoModule'
      },
      { 
        path: 'cidade',
        loadChildren: './cidade/cidade.module#CidadeModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuNavegacaoRoutingModule { }
