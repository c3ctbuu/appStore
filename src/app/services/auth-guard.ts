import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Clientes } from './clientes';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Clientes);
  const router = inject(Router);

  if (authService.getUserRole()) {
    return true; // ¡Tiene permiso, déjalo pasar!
  } else {
    // Si no tiene rol, lo mandamos al login
    router.navigate(['/login']);
    return false; // ¡Alto ahí! Acceso denegado.
  }
};
