import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productForm: FormGroup
  product:Product= new Product() 
  vid:number
  pid:number
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private service:UserService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.productForm = this.fb.group({
      id:[''],
      name: [''],
      description : [''],
      manufacturer: [''], 
      origin : ['']
      
    })

    this.route.params.subscribe(data=>{
     
      this.vid=data.vid
      this.pid=data.pid
      this.service.getProduct(data.pid).subscribe(data=>{
        
        this.productForm.patchValue(data)
       
      });

      
      
    })
  }

  cancel(){
     this.router.navigate(['vendorinfo', this.vid])
    
  }

  update(){
    
    this.service.updateProduct(this.productForm.value).subscribe(data=>{
        this.router.navigate(['vendorinfo', this.vid])
    })

    
  }

}
