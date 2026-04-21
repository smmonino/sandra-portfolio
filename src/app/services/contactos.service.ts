import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contacto } from '../models/models.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private apiURL = 'https://qtldwiiujibwafsvrnzf.supabase.co/rest/v1/contacto';

  http: HttpClient = inject(HttpClient);

  addContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(this.apiURL, contacto);
  }

  actualizarContacto(id: number){
    return this.http.patch<Contacto>(`${this.apiURL}?id=eq.${id}`, {open: true});
  }
  

  getContactos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.apiURL);
  }

  deleteContacto(id: number){
    return this.http.delete<Contacto>(`${this.apiURL}?id=eq.${id}`);
  }

}
