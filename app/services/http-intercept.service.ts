import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor{


  constructor(private service:UserService) { }
 
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
     
      
    let token = this.service.getToken();
    let header = "Bearer "+token;
    let username = localStorage.getItem("username");

    if(token && username) { 
      req = req.clone({
        setHeaders : {
            Authorization : header
          }
        }) 
        
    }
    
    return next.handle(req);
    
    }

}
