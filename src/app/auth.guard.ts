import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else{
      // this.router.navigate(['/bpro']);
      return true;
    }
    // else if (this.isLoggedIn()) {
    //   return true;
    // }
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isloggedIn') === 'true') {
      // this.router.navigate(['/bpro']);
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}