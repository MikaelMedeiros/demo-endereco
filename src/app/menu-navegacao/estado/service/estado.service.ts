import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../model/estado.interface';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    const url = `${this.base_url}/estados`;

    return this.http.get(url);
  }

  postEstado(estado: Estado): Observable<Estado> {
    const url = `${this.base_url}/estados`;
    
    return this.http.post<Estado>(url, estado, this.getCabecalho());
  }

  putEstado(estado: Estado): Observable<any> {
    const id = estado._id;
    const url = `${this.base_url}/estados/${id}`;

    return this.http.put(url, estado, this.getCabecalho());
  }

  deleteEstado(id: number): Observable<any> {
    const url = `${this.base_url}/estados/${id}`;

    return this.http.delete(url, this.getCabecalho());
  }

  getCabecalho() {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return header;
  }

}
