import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Visitante } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {
  private apiURL = 'https://qtldwiiujibwafsvrnzf.supabase.co/rest/v1/visita';
 
  http: HttpClient = inject(HttpClient);



  getVisitantes(){
    return this.http.get<Visitante[]>(this.apiURL);
  }

  addVisitante(visitante: Visitante){
    return this.http.post<Visitante>(this.apiURL, visitante);
  }
}
