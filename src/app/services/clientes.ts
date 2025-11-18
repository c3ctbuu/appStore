import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class Clientes {
  private http = inject(HttpClient);
  private backendUrl = 'http://localhost:3000';

  private readonly ROLE_KEY = 'userRole';

  constructor() { }

  login(correo: string, password: string): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${this.backendUrl}/login`, { correo, password }).pipe(
      tap(user => {
        this.saveUserRole(user.rol);
      })
    );
  }

  private saveUserRole(role: string): void {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.ROLE_KEY);
  }
}
