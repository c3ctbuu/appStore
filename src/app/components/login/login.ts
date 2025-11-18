import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Clientes } from '../../services/clientes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(Clientes);
  private router = inject(Router);

  loginObj: any = {
    correo: '',
    password: ''
  }

  public loginError: string | null = null;

  onlogin() {
    this.loginError = null;

    if (!this.loginObj.correo || !this.loginObj.password) {
      this.loginError = "Correo y contraseña son obligatorios.";
      return;
    }

    this.authService.login(this.loginObj.correo, this.loginObj.password).subscribe({
      next: (user) => {

        console.log(`Bienvenido ${user.nombre}, tu rol es ${user.rol}`);
        this.router.navigateByUrl("home");
      },
      error: (err) => {

        console.error('Error de login', err);
        if (err.status === 401) {
          this.loginError = "Correo o contraseña incorrectos.";
        } else {
          this.loginError = "Error de conexión. Inténtalo más tarde.";
        }
      }
    });
  }
}
