import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {

vendors:any[]
products:Array<any>
vid:number
  constructor(private router:Router, private route:ActivatedRoute, private service:UserService ) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
      this.vid = data.id;
      this.service.getVendor(this.vid).subscribe(data=>{
        this.vendors=[data]
      });

      this.service.getVendorProducts(this.vid).subscribe(data=>{
        this.products=data
      });
    })

    
    
  }

  vendorId(id){
    this.router.navigate(['product',id])
  }

  edit(id){
    this.router.navigate(['editvendor',id])
    
  }

  list(){
    this.router.navigate(['vendor'])
  }

}
