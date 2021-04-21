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

  listarCidade(): Observable<Estado[]> {

    const url = `${this.base_url}/estados`;

    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.get(url, header);
  }

}
