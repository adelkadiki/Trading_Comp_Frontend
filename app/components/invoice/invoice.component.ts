import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Sales } from 'src/app/models/Sales';
import { Item } from 'src/app/models/Item';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  

  total:number[]=[]
  sales:Sales= new Sales()
  item:Array<Item>
  client:Client=new Client()

  doc:any

  constructor(private route:ActivatedRoute, private service:UserService, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(data=>{
      this.service.getSalesById(data.id).subscribe(data=>{
            this.sales=data
            this.service.getClientByCompany(data.client).subscribe(data=>{
              this.client=data
              
            })
      })
      this.service.getSalesItems(data.id).subscribe(data=>{
        this.item=data
        data.findIndex(d=>{
          
          this.total.push(d.price*d.quantity)
          
        })
      })
        
      
    })
  }

  totalValue(a,b):number{
    return parseFloat(a)*parseFloat(b)
  }

  pdfDownload(){

      let element = document.getElementById('invoice')

      html2canvas(element).then(canvas =>{
        
          let img = canvas.toDataURL('image/png')

          let doc = new jsPDF()
          let imgH = canvas.height * 208 / canvas.width
          doc.addImage(img, 0, 0, 208, imgH)
          doc.save('invoice.pdf')
      })      
  }

  salesList(){
      this.router.navigate(['saleslist'])
  }

}
