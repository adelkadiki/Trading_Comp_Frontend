import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Sales } from 'src/app/models/Sales';
import { Router } from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales:Array<Sales>
  
  constructor(private service:UserService, private router:Router, public diaglog:MatDialog) { }

  ngOnInit() {

    this.getData()
  }

  getData(){
    this.service.getSales().subscribe(data=>{
      this.sales=data  
  })
  }

  confirm(id){
    this.diaglog.open(DialogComponent)
    .afterClosed().subscribe(data=>{
      
        if(data=="true"){     
         this.service.deleteSales(id).subscribe(data=>{
           this.getData()
         })      
        }
    })
  }

  salesInfo(id){
    this.router.navigate(['sales',id])
    
  }

  invoice(id){
    this.router.navigate(['invoice',id])
  }

}
