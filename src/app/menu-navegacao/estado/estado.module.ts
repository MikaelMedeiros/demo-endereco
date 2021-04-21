import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { EstadoRoutingModule } from './estado-routing.module';
import { EstadoDetailComponent } from './components/estado-detail/estado-detail.component';
import { EstadoListComponent } from './components/estado-list/estado-list.component';

@NgModule({
  imports: [
    SharedModule,
    EstadoRoutingModule
  ],
  declarations: [
    EstadoDetailComponent, 
    EstadoListComponent
  ]
})
export class EstadoModule { }
