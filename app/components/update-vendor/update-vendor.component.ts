import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Vendor } from 'src/app/models/Vendor';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {

  vendorForm : FormGroup
  vendor:Vendor = new Vendor()
  vid:number

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private service:UserService, private router:Router, private formBuilder:FormBuilder) { }


  ngOnInit() {

    this.vendorForm = this.fb.group({
      id:[''],
      contact: [''],
      email : [''],
      website: [''], 
      address : [''],
      phone: ['']
    })

    this.route.params.subscribe(data=>{
      this.vid = data.id
      this.service.getVendor(this.vid).subscribe(data=>{
          this.vendor=data;
           this.vendorForm.patchValue(data)
              
      });
    })
  }

  

  cancel(){
    this.router.navigate(['editvendor', this.vid])
  }

  update(){
  
    
    this.service.updateVendor(this.vendorForm.value).subscribe(data=>{
        this.router.navigate(['vendorinfo', this.vendor.id])
    });

  }

}
