import { inject, Injectable } from '@angular/core';
import { Iisproductos } from '../models/is.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Productos {

   private http = inject(HttpClient);
  
  // La URL de tu backend
  private apiUrl = 'http://localhost:3000/OArt';

  constructor() {
    console.log("Servicio de Productos (modo HTTP) iniciado.");
  }

  //Devuelve un Observable con la lista de artículos desde el backend.
  getArticulos(): Observable<Iisproductos[]> {
    // Hacemos una petición GET a nuestro backend
    return this.http.get<Iisproductos[]>(this.apiUrl);
  }
}
