import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeListComponent } from './components/cidade-list/cidade-list.component';

const routes: Routes = [
  {
    path: '',
    component: CidadeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
