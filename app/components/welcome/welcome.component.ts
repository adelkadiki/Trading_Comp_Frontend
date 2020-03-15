import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {

    
  }

  goVendors(){
    this.router.navigate(['vendor'])
  }

  goClients(){
    this.router.navigate(['client'])
  }

  goSales(){
    this.router.navigate(['saleslist'])
  }

}
