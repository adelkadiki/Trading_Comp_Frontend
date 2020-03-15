import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  URL:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<any>{

      return this.http.post<any>(this.URL+"/authenticate", {username:username, password:password})
      .pipe(
        map(data=>{
          localStorage.setItem('currentUser', data.jwt);

        })
      );
  }

  getToken():string{
    return localStorage.getItem('currentUser')
       
     }

     isLoggedin(){
      return localStorage.getItem('currentUser') ? true : false;
    }

    findAllVendors(): Observable<any>{

      return this.http.get(this.URL+"/vendor/allvendors")

    }

    addVendor(vendor): Observable<any>{
      return this.http.post<any>(this.URL+"/vendor/addvendor", vendor);
    }

    getVendor(id:number): Observable<any>{

      return this.http.get(this.URL+"/vendor/findvendorbyid/"+id);

    }

    updateVendor(vendor): Observable<any>{
        return this.http.put(this.URL+"/vendor/updatevendor", vendor);
    }
    
    getVendorProducts(id:number): Observable<any>{

      return this.http.get(this.URL+"/vendor/getproducts/"+id);
    }

    updateProduct(product:number): Observable<any>{
      return this.http.put(this.URL+"/product/updateproduct/",product)
    }

    deleteProduct(id:number):Observable<any>{
       return this.http.delete(this.URL+"/product/deleteproduct/"+id)
    }

    addProduct(id:number, product): Observable<any>{
      return this.http.post(this.URL+"/product/addproduct/"+id, product)
    }

    getProduct(id:number):Observable<any>{
      return this.http.get(this.URL+"/product/findproductbyid/"+id)
    }

    addClient(client):Observable<any>{
      return this.http.post(this.URL+"/client/addclient", client)
    }

    findAllClients():Observable<any>{
      return this.http.get(this.URL+"/client/allclients")
    }


    getClient(id:number):Observable<any>{
      return this.http.get(this.URL+"/findclientbyid/"+id)
    }
    
    getAllProducts():Observable<any>{
      return this.http.get(this.URL+"/product/allproducts")
    }

    addSales(sales):Observable<any>{
        return this.http.post(this.URL+"/sales/addsales", sales)
    }


    getSales():Observable<any>{
      return this.http.get(this.URL+"/sales/allsales")
    }
     
    getSalesItems(id):Observable<any>{
      return this.http.get(this.URL+"/sales/getsalesitems/"+id)
    }

    getSalesById(id):Observable<any>{
      return this.http.get(this.URL+"/sales/findsalesbyid/"+id)
    }

    deleteVendor(id):Observable<any>{
      return this.http.delete(this.URL+"/vendor/deletevendor/"+id)
    }

    deleteClient(id):Observable<any>{
      return this.http.delete(this.URL+"/client/deleteclient/"+id)
    }

    deleteSales(id):Observable<any>{
      return this.http.delete(this.URL+"/sales/deletesales/"+id)
    }

    getClientByCompany(company):Observable<any>{
      return this.http.get(this.URL+"/client/clientbycompany/"+company)
    }

}
