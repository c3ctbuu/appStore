import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { Iisproductos } from '../../models/is.model';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Header, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  private productosService = inject(Productos);

  // Propiedades para manejar los datos y estados
  public publishedProducts: Iisproductos[] = [];
  public isLoading = true;
  public error: string | null = null;
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    // Nos suscribimos al Observable que devuelve el servicio
    this.productosService.getArticulos().subscribe({
      next: (data) => {
        // ¡Éxito! Guardamos los productos
        this.publishedProducts = data;
        this.isLoading = false;
      },
      error: (err) => {
        // Error. Guardamos el mensaje de error
        console.error('Error al obtener productos', err);
        this.error = 'No se pudieron cargar los productos. Intenta más tarde.';
        this.isLoading = false;
      }
    });
  }
}
