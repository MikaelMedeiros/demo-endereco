import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoListComponent } from './components/estado-list/estado-list.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoListComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
