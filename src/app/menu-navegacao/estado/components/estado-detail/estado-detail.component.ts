import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { throwError } from 'rxjs';
import { Estado } from '../../model/estado.interface';
import { EstadoService } from '../../service/estado.service';

@Component({
  selector: 'app-estado-detail',
  templateUrl: './estado-detail.component.html',
  styleUrls: ['./estado-detail.component.css']
})
export class EstadoDetailComponent {

  @Input() display: boolean;
  @Output() mudarDisplay = new EventEmitter<boolean>();;
  @Input() estado: Estado;

  constructor(private estadoService: EstadoService) { }

  salvarEstado() {
    if (this.estado._id) {
      this.atualizarEstado();
    } else {
      this.novoEstado();
    }
  }

  novoEstado() {
    if (this.validarFormulario())
      return alert('Campos obrigatórios');

    this.estadoService.postEstado(this.estado).subscribe(
      data => {
        console.log(data);
        this.fechar();
      },
      error => alert(error.error.erro)
    );
  }

  atualizarEstado() {
    if (this.validarFormulario())
      return alert('Campos obrigatórios');

    this.estadoService.putEstado(this.estado).subscribe(
      data => {
        console.log(data);
        this.fechar();
      },
      error => alert(error.error.erro)
    );
  }

  private validarFormulario() {
    return !this.estado.nome || !this.estado.abreviacao;
  }

  fechar() {
    this.display = false;
    this.mudarDisplay.emit(this.display);
  }
}
