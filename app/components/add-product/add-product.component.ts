import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm:FormGroup
  vid:number
  info:any[]
  vendor:string=""

  constructor(private service:UserService, private fb:FormBuilder, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(data=>{
        this.vid=data.id
        
    })

    this.service.getVendor(this.vid).subscribe(data=>{
          this.vendor=data.contact
    })

    this.addProductForm = this.fb.group({

      name : new FormControl(),
      description : new FormControl(),
      manufacturer : new FormControl(),
      origin : new FormControl(),
    
     })   

    
  }

 

  addProduct(){
    
    this.info=[this.addProductForm.value]
      
      this.service.addProduct(this.vid, this.info).subscribe(data=>{
        this.router.navigate(['vendorinfo', this.vid])
      });
      
  }

  cancel(){
    this.router.navigate(['editvendor',this.vid])
  }

}
