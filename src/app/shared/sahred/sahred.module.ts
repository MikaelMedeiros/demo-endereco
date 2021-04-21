import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports: [
    ReactiveFormsModule,
    CardModule
  ],
  declarations: []
})
export class SahredModule { }
