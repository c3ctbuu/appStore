import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Clientes } from './clientes';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Clientes);
  const router = inject(Router);

  if (authService.getUserRole()) {
    return true; 
  } else {
    router.navigate(['/login']);
    return false; 
  }
};
