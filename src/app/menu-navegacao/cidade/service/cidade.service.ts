import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from '../model/cidade.interface';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  private getBaseUrl() {
    return `${environment.base_url}/cidades`
  }

  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.getBaseUrl());
  }

  postCidade(cidade: Cidade): Observable<Cidade> {
    console.log('post antes', cidade);
    this.montarIdEstado(cidade);
    console.log('post despues', cidade);
    return this.http.post<Cidade>(this.getBaseUrl(), cidade, this.getCabecalho());
  }

  putCidade(cidade: Cidade): Observable<any> {
    const idCidade = cidade._id;    
    console.log('put antes', cidade);
    this.montarIdEstado(cidade);
    console.log('put despues', cidade);
    const url = `${this.getBaseUrl()}/${idCidade}`;

    return this.http.put(url, cidade, this.getCabecalho());
  }

  deleteCidade(id: number): Observable<any> {
    const url = `${this.getBaseUrl()}/${id}`;

    return this.http.delete(url, this.getCabecalho());
  }

  private getCabecalho() {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return header;
  }

  private montarIdEstado(cidade: Cidade) {
    const { _id } = cidade.estadoId
    cidade.estadoId = _id;    
  }

}


