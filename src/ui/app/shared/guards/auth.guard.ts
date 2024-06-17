import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs';
import { UserService } from '../services/user.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const userService = inject(UserService)
    const router = inject(Router)
    return userService.isAuthObserve()
      .pipe(
        map((res) => res.status === 200 || router.createUrlTree(['/auth'])),
        catchError(map(() => router.createUrlTree(['/auth'])))
      )
}