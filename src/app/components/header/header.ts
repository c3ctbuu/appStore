import { CommonModule} from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Clientes } from '../../services/clientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private clientesService = inject(Clientes);
  private router = inject(Router);
  
  userRole: string | null = null;

  ngOnInit(): void {
    this.userRole = this.clientesService.getUserRole();
  }

  onLogout() {
    this.clientesService.logout();
    
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
