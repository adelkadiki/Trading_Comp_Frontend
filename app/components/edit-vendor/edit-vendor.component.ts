import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Vendor } from 'src/app/models/Vendor';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {

 

vendor:Vendor = new Vendor()
products:Array<any>
vid:number

  constructor(private router:Router, private route:ActivatedRoute, 
    private service:UserService, public diaglog:MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(data =>{
      this.vid = data.id;
      this.service.getVendor(this.vid).subscribe(data=>{
        // this.vendors=[data]
        this.vendor=data
      });

      this.service.getVendorProducts(this.vid).subscribe(data=>{
        this.products=data
      });
    })
  }

  deleteVendor(id){
    
    this.diaglog.open(DialogComponent)
    .afterClosed().subscribe(data=>{
      if(data=="true"){      
        this.service.deleteVendor(id).subscribe(data=>{
          this.router.navigate(['vendor'])
        })
      }
    })

    
  }

  confirm(id){
    this.diaglog.open(DialogComponent)
    .afterClosed().subscribe(data=>{
      
        if(data=="true"){
          this.service.deleteProduct(id).subscribe(data=>{
              this.router.navigate(['vendorinfo',this.vid])
          })
          
        }
    }
      )
  }

  updateVendor(id){
    this.router.navigate(['updatevendor', id])
  }

  cancel(){
    this.router.navigate(['vendorinfo', this.vid])
  }

  updateProduct(id){
      this.router.navigate(['updateproduct', this.vid, id])
  }

  addProduct(){
    this.router.navigate(['addproduct', this.vid])
  }

}
