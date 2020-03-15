import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  product:any[]
  id:number


  constructor(private route:ActivatedRoute, private service:UserService, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(data=>{
      this.id=data.id
      this.service.getVendorProducts(this.id).subscribe(data=>{
        this.product=data;
       
      });
  }) 
  }

  vendorPage(){
  
    this.router.navigate(['vendorinfo', this.id])
  }

  deleteProduct(id){
    this.service.deleteProduct(id).subscribe(data=>{
      this.service.getVendorProducts(this.id).subscribe(data=>{
        this.product=data;
      });
      
    });
  }

}
