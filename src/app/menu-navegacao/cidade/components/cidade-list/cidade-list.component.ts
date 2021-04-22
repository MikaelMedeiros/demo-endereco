import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Cidade } from '../../model/cidade.interface';
import { CidadeService } from '../../service/cidade.service';

@Component({
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {

  listaDeCidades: Observable<Cidade[]>;
  cidadeSelecionado: Cidade = {nome: '', estadoId: ''};
  errorObject = null;
  display: boolean;

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.listarCidades();
  }

  listarCidades() {
    this.listaDeCidades = this.cidadeService.getCidades().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  mudarDisplay($event) {
    this.display = $event;
    this.listarCidades();
  }

  mostrarDialogNovo() {
    this.display = true;
  }

  mostrarDialogEditar(cidade) {
    this.cidadeSelecionado = cidade;
    this.display = true;
  }

  removerCidade(cidade) {
    const { _id } = cidade;
    this.cidadeService.deleteCidade(_id).subscribe(
      res => {
        console.log(res.messagem)
        this.listarCidades();
      },
      err => console.log(err)
    );
  }

}
