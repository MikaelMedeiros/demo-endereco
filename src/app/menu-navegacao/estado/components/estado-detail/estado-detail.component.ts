import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Estado } from '../../model/estado.interface';
import { EstadoService } from '../../service/estado.service';

@Component({
  selector: 'app-estado-detail',
  templateUrl: './estado-detail.component.html',
  styleUrls: ['./estado-detail.component.css']
})
export class EstadoDetailComponent implements OnInit {

  @Input() display: boolean;
  @Output() mudarDisplay = new EventEmitter<boolean>();;

  estado: Estado;
  formularioEstado = new FormControl();

  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.montarFormulario();
  }

  montarFormulario() {
    this.estado = {nome: '', abreviacao: ''};  
  }

  salvarEstado() {
    this.novoEstado();
  }

  novoEstado() {   
    if(this.estado.nome && this.estado.abreviacao) {
      this.estadoService.incluirEstado(this.estado).subscribe(
        data => {
          console.log(data);
          this.fechar();     
        },
        error => alert(error.error.erro)
     );
    } else {
      alert('Campos obrigatórios');
    }
  }

  atualizarEstado() {

  }

  fechar() {
    this.display = false;
    this.mudarDisplay.emit(this.display);
  }
}
