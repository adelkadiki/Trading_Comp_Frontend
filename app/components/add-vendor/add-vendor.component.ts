import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/Vendor';
import { UserService } from 'src/app/services/user.service';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  addVendorForm: FormGroup

  


  vendor:Vendor= new Vendor();

  constructor(private service:UserService, private fb:FormBuilder) { }

   ngOnInit() {
   
   this.addVendorForm = this.fb.group({

    contact : new FormControl(),
    email : new FormControl(),
    website : new FormControl(),
    address : new FormControl(),
    phone : new FormControl(),

    products : this.fb.array([this.productsGroup()])
   })   
   
  }

  productsGroup(){
   return this.fb.group({
      name: new FormControl(),
      description: new FormControl(),
      manufacturer: new FormControl(),
      origin: new FormControl()
    })
  }
  
  get productsArray(){
   return <FormArray>this.addVendorForm.get('products')
 }

  addVendor(){

    this.service.addVendor(this.addVendorForm.value).subscribe(data=>{
      this.addVendorForm.reset();
    }) 
 
  }



  addProduct(){
    this.productsArray.push(this.productsGroup());
  }


  removeProduct(index){
    this.productsArray.removeAt(index)
  }

  newProducts(): FormGroup{
    return this.fb.group({
        name: new FormControl(),
        description: new FormControl(),
        manufacturer: new FormControl(),
        origin: new FormControl()
    })
  }

  

  

  

}
