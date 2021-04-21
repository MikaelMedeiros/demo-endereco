import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Estado } from '../../model/estado.interface';
import { EstadoService } from '../../service/estado.service';

@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.css']
})
export class EstadoListComponent implements OnInit {

  listaDeEstados: Estado[] = [];
  estadoSelecionado: Estado = {nome: '', abreviacao: ''};
  errorObject = null;
  display: boolean;

  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.listarEstados();
  }

  listarEstados() {
    this.listaDeEstados = this.estadoService.getEstados().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  mudarDisplay($event) {
    this.display = $event;
    this.listarEstados();
  }

  mostrarDialogNovo() {
    this.display = true;
  }

  mostrarDialogEditar(estado) {
    this.estadoSelecionado = estado;
    this.display = true;
  }

  removerEstado(estado) {
    const _id = estado;
    this.estadoService.deleteEstado(_id);
  }

}
