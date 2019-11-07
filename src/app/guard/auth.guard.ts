import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.isLoggedIn) { return true; }

    return this.auth.currentUserObservable.pipe(
      take(1),
      map(user => {
        console.log('user: ', user);
        return !!user
      }),
      tap(loggedIn => {
        console.log("loggedIn: ", loggedIn);
        if (!loggedIn) {
          console.log("access denied");
          //this.router.navigate(['/login']);
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
      })
    );

  }

}
