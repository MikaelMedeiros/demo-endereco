import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeDetailComponent } from './components/cidade-detail/cidade-detail.component';
import { CidadeListComponent } from './components/cidade-list/cidade-list.component';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    SharedModule,
    DropdownModule,
    CidadeRoutingModule
  ],
  declarations: [
    CidadeDetailComponent,
    CidadeListComponent
  ]
})
export class CidadeModule { }
