import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TableModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TableModule,
    DialogModule
  ],
  declarations: []
})
export class SharedModule { }
