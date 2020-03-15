import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { UserService } from 'src/app/services/user.service';
import {DialogComponent} from '../dialog/dialog.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

client:Client=new Client()

  constructor(private route:ActivatedRoute, private service:UserService, 
    private router:Router, public diaglog:MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.service.getClient(data.id).subscribe(data=>{
        this.client=data
      })
    })
  }

  list(){
    this.router.navigate(['client'])
  }

  confirm(id){
    this.diaglog.open(DialogComponent)
    .afterClosed().subscribe(data=>{
      
        if(data=="true"){
          this.service.deleteClient(id).subscribe(data=>{
               this.router.navigate(['client'])
          })     
        }
    })
  }

}
