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
  errorObject = null;
  display: boolean;


  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.listarEstados();
  }

  listarEstados() {
    this.listaDeEstados = this.estadoService.listarEstados().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  editarEstado() {

  }

  mostrarDialog() {
    this.display = true;
  }

}
