import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Vendor } from 'src/app/models/Vendor';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {


  vendorList: Array<Vendor>
  dataSource: MatTableDataSource<Vendor> = new MatTableDataSource();
  displayedColumns: string[] = ['contact', 'address'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router:Router, 
    private userService:UserService) { }

  ngOnInit() {
   
    this.allVendors();
  }

  getRow(vendor){

    let id = vendor.id;
    this.router.navigate(['vendorinfo',id]);
    
   }

   allVendors(){
     this.userService.findAllVendors().subscribe(data=>{
       this.vendorList=data;
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.sort=this.sort;
     }, err=>{
       console.log("error loading vedor list");
     }  
     );
   }

   find(filterValue:string){

    this.dataSource.filter = filterValue.trim().toLowerCase();

   }

   
   

}
