import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm:FormGroup
  submitted=false
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";

  constructor(private service:UserService, private fb:FormBuilder, private router:Router) { }

  ngOnInit() {

    this.clientForm = this.fb.group({

      contact : new FormControl(),
      company : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$")]),
      address : new FormControl(),
    
     })   
  }

  addClient(){

    this.submitted=true;

    if(this.clientForm.invalid){
      return;
    }

    this.service.addClient(this.clientForm.value).subscribe(data=>{
      // this.clientForm.reset()
      this.router.navigate(['client'])
    })
  }

  get formControl(){
    return this.clientForm.controls;
  }

}
