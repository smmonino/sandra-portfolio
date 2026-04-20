import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);

  const isAdmin = userService.isAdmin() || localStorage.getItem('user') === 'admin';

  if (!isAdmin) {
    alert('No tienes autorización');
    return false;
  }
  return true;
};
