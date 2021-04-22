import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { Estado } from 'src/app/menu-navegacao/estado/model/estado.interface';
import { EstadoService } from 'src/app/menu-navegacao/estado/service/estado.service';
import { Cidade } from '../../model/cidade.interface';
import { CidadeService } from '../../service/cidade.service';

@Component({
  selector: 'app-cidade-detail',
  templateUrl: './cidade-detail.component.html',
  styleUrls: ['./cidade-detail.component.css']
})
export class CidadeDetailComponent implements OnInit, OnDestroy {

  @Input() display: boolean;
  @Output() mudarDisplay = new EventEmitter<boolean>();;
  @Input() cidade: Cidade;

  dropDownEstados: any;
  errorObject = null;

  constructor(
    private cidadeService: CidadeService, 
    private estadoService: EstadoService
  ) { }
 

  ngOnInit() {
    this.preencherDropDownEstados();
  }

  private preencherDropDownEstados() {
    this.dropDownEstados = 
    this.estadoService
    .getEstados()    
    .pipe(
      map( (estados: any[]) => this.criarDropdown(estados) ),
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  private criarDropdown(itens: any[]) {
    return itens.map(item => {
      return {
        label: item.nome,
        value: item
      };
    });
  }

  salvarCidade() {
    if (this.cidade._id) {
      this.atualizarCidade();
    } else {
      this.novoCidade();
    }
  }

  novoCidade() {
    if (this.validarFormulario())
      return alert('Campos obrigatórios');

    this.cidadeService.postCidade(this.cidade).subscribe(
      data => {
        this.fechar();
      },
      error => alert(error.error.erro)
    );
  }

  atualizarCidade() {
    if (this.validarFormulario())
      return alert('Campos obrigatórios');

    this.cidadeService.putCidade(this.cidade).subscribe(
      data => {
        this.fechar();
      },
      error => alert(error.error.erro)
    );

  }

  private validarFormulario() {
    return !this.cidade.nome || !this.cidade.estadoId;
  }

  fechar() {
    this.display = false;
    this.limparCidade();
    this.mudarDisplay.emit(this.display);
  }

  ngOnDestroy(): void {
    this.limparCidade();
  }

  private limparCidade() {
    this.cidade._id = undefined;
    this.cidade.nome = undefined;
    this.cidade.estadoId = undefined;
  }

}
