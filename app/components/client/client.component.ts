import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  clientsList: Array<Client>
  dataSource: MatTableDataSource<Client> = new MatTableDataSource();
  displayedColumns: string[] = ['contact', 'company'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router:Router, 
    private userService:UserService) { }

  ngOnInit() {

    this.allClients()
  }

  allClients(){
    this.userService.findAllClients().subscribe(data=>{
      this.clientsList=data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
    }, err=>{
      console.log("error loading vedor list");
     
  }  
    );
  }

  getRow(client){
    let id = client.id
     this.router.navigate(['clientinfo', id])
  }

  find(filterValue:string){

    this.dataSource.filter = filterValue.trim().toLowerCase();

   }

}
