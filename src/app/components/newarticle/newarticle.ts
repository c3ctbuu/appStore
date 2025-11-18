import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { Iisproductos } from '../../models/is.model';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-newarticle',
  imports: [FormsModule, Header, CommonModule],
  templateUrl: './newarticle.html',
  styleUrl: './newarticle.css'
})
export class Newarticle{

  productObj: any = {
    photo: '',
    name: '',
    description: '',
    price: null,
    status: 'draft'
  };

  constructor() {
    console.log("Componente Newarticle cargado. Funciones CRUD deshabilitadas.");
  }

  get productsToShow(): Iisproductos[] {
    return [];
  }

  onFileSelected(event: any): void {
    console.log('onFileSelected: Función CRUD deshabilitada.');
  }

  onsaveRecord() {
    console.log('onsaveRecord: Función CRUD deshabilitada.');
    alert('La función de guardar está temporalmente deshabilitada.');
  }

  onPublishProduct(productToPublish: any) {
    console.log('onPublishProduct: Función CRUD deshabilitada.');
  }

  onDeleteDraft(productToDelete: any) {
    console.log('onDeleteDraft: Función CRUD deshabilitada.');
  }
}
