import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{
  constructor(private authService: AuthService){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
//In this example, the AuthGuard  should implement the CanLoad interface.
  canLoad(route: Route) {
    return this.authService.isAuthenticated();
  }



}
