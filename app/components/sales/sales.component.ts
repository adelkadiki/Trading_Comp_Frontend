import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales:any[]
  items:Array<Item>

  constructor(private router:Router, private route:ActivatedRoute, private service:UserService) { }

  ngOnInit() {

    this.route.params.subscribe(data=>{      
      
      this.service.getSalesById(data.id).subscribe(data=>{
          this.sales=[data]
          
      })

      this.service.getSalesItems(data.id).subscribe(data=>{
        this.items=data
       

      })

      
    })

  }

  salesList(){
    this.router.navigate(['saleslist'])

  }

}
