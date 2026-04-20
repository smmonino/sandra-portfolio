import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Visitante } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {
  private apiURL = 'https://qtldwiiujibwafsvrnzf.supabase.co/rest/v1/visita';
  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bGR3aWl1amlid2Fmc3ZybnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NzcxNjYsImV4cCI6MjA5MjI1MzE2Nn0.E7bkqmJMtmvI3MYTGwAy3_9WB7boC4YGZEHbvVQjFYQ';
  http: HttpClient = inject(HttpClient);
  constructor() { }

  private httpOptions = {
    headers: new HttpHeaders({
      'apikey': this.apiKey,
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    })
  };

  private dbURL = 'http://localhost:3000/visitantes';
  


  getVisitantes(){
    return this.http.get<Visitante[]>(this.apiURL, this.httpOptions);
  }

  addVisitante(visitante: Visitante){
    return this.http.post<Visitante>(this.apiURL, visitante, this.httpOptions);
  }
}
