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

  listarEstados(): Observable<Estado[]> {

    const url = `${this.base_url}/estados`;

    return this.http.get(url);
  }

  incluirEstado(estado: Estado): Observable<Estado> {

    const url = `${this.base_url}/estados`;

    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log('Estado informado: ', estado);
    return this.http.post<Estado>(url, estado, header);
  }

}
