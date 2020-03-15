import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:UserService, private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(this.service.isLoggedin()){

      return true;
    }else {

      this.router.navigate(['login']);
      return false;
    }
  }
  
}
