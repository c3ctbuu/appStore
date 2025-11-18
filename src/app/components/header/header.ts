import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  
  userRole: string | null = null;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
  }
}
