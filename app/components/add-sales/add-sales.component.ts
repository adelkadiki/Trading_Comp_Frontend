import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {

  salesForm: FormGroup
  clients:any[]
  products:any[]
  totalPrice:number=0
  qntMsg:string=""
  num = "^[0-9]*$";
  prcMsg:string=""
  
  constructor(private service:UserService, private fb:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.salesForm = this.fb.group({

      client : new FormControl(),
      paid: new FormControl(),
      date: new FormControl(),
      total: new FormControl(),
      notices: new FormControl(),
      items : this.fb.array([this.productsGroup()])
      
     })
     
     

    this.service.findAllClients().subscribe(data=>{
      this.clients=data
      
    })
    
    this.service.getAllProducts().subscribe(data=>{
        this.products=data
    })

    // this.priceData()

   
    
  }

  

  onChanges(data){

  if(!data.target.value.match(this.num)){
      this.qntMsg="Numbers only"
  }

  }

  vendorInfo(vendor){
    console.log(vendor)
  }

  get itemsArray(){
    return <FormArray>this.salesForm.get('items')
  }

  productsGroup(){
    return this.fb.group({
      product: new FormControl(),
      quantity: new FormControl(),
      expiration: new FormControl(),
      price: new FormControl()
    })
  }

 

  addSales(){
 
    
    this.service.addSales(this.salesForm.value).subscribe(data=>{
    
       this.router.navigate(['sales', data.id])
     // console.log(data)
    })

    //console.log(this.salesForm.value)
   
  }

  

  priceData():number{

    return this.itemsArray.controls.reduce((sum, i)=>{

      let qunt = parseFloat(i.get('quantity').value)
      let prc = parseFloat(i.get('price').value)
      
      // sum += parseFloat(i.get('price').value)
      sum +=qunt*prc
      
      return sum;
  }, 0)
  }

  pricInput(event){

    if(!event.target.value.match(this.num)){
      this.prcMsg="Numbers only"
    }

    this.salesForm.get('total').patchValue(this.priceData())
  }
  

  addItem(){
    this.itemsArray.push(this.productsGroup())
  }

  removeItem(index){
    this.itemsArray.removeAt(index)
    this.salesForm.get('total').patchValue(this.priceData())
  }

}
