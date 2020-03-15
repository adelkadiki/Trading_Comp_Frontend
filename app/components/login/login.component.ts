import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(); 

  public username:string="";
  public password:string="";
  
 errorMessage:string = "";

  constructor(private service:UserService, private router:Router  ) { }

  ngOnInit() {
    // let token = localStorage.getItem("currentUser");
    
    // if(this.service.getToken()===token){
    //   this.router.navigate(['/welcome'])
      
    // }else{
    //   localStorage.clear();
      
    // }

    localStorage.clear()
    
    
  }

  login(){

    this.service.login(this.username, this.password).subscribe(data =>{
     
     localStorage.setItem("username", this.username);
     this.router.navigate(['/welcome']);
   
  
   }, err=>{
     this.errorMessage="Username or password is incorrect"
   });

 }

}
