import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const username = localStorage.getItem('user');

  if (username) {
    return true;
  } else {
    router.navigate(['/not-logged-in']);
    return false;
  }
};
