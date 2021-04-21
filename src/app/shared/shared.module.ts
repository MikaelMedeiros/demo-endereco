import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule  
  ],
  exports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule  
  ],
  declarations: []
})
export class SharedModule { }
