import { Injectable } from '@angular/core';
import { Especialidade } from '../models/especialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  save(especialidade: Especialidade): Observable<any>{
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post(API_URL, especialidade, { headers, observe: 'response' });
  }

    constructor(private http: HttpClient) {}
}
