import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './components/welcome/welcome.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './gurds/auth.guard'
import {LogoutComponent} from './components/logout/logout.component'
import {VendorComponent} from './components/vendor/vendor.component'
import {AddVendorComponent} from './components/add-vendor/add-vendor.component'
import {VendorInfoComponent} from './components/vendor-info/vendor-info.component'
import {ProductComponent} from './components/product/product.component'
import {EditVendorComponent} from './components/edit-vendor/edit-vendor.component'
import {UpdateVendorComponent} from './components/update-vendor/update-vendor.component'
import {UpdateProductComponent} from './components/update-product/update-product.component'
import {AddClientComponent} from './components/add-client/add-client.component'
import {ClientComponent} from './components/client/client.component'
import {AddProductComponent} from './components/add-product/add-product.component'
import {ClientInfoComponent} from './components/client-info/client-info.component'
import {AddSalesComponent} from './components/add-sales/add-sales.component'
import {SalesComponent} from './components/sales/sales.component'
import {SalesListComponent} from './components/sales-list/sales-list.component'
import {InvoiceComponent} from './components/invoice/invoice.component'


const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent, canActivate:[AuthGuard] },
  {path:'addvendor', component:AddVendorComponent, canActivate:[AuthGuard] },
  {path:'vendorinfo/:id', component:VendorInfoComponent, canActivate:[AuthGuard] },
  {path:'product/:id', component:ProductComponent, canActivate:[AuthGuard] },
  {path:'editvendor/:id', component:EditVendorComponent, canActivate:[AuthGuard] },
  {path:'updatevendor/:id', component:UpdateVendorComponent, canActivate:[AuthGuard] },
  {path:'updateproduct/:vid/:pid', component:UpdateProductComponent, canActivate:[AuthGuard] },
  {path:'addclient', component:AddClientComponent, canActivate:[AuthGuard] },
  {path:'client', component:ClientComponent, canActivate:[AuthGuard] },
  {path:'addproduct/:id', component:AddProductComponent, canActivate:[AuthGuard] },
  {path:'clientinfo/:id', component:ClientInfoComponent, canActivate:[AuthGuard] },
  {path:'addsales', component:AddSalesComponent, canActivate:[AuthGuard] },
  {path:'sales/:id', component:SalesComponent, canActivate:[AuthGuard] },
  {path:'saleslist', component:SalesListComponent, canActivate:[AuthGuard] },
  {path:'invoice/:id', component:InvoiceComponent, canActivate:[AuthGuard] },
  {path:'logout', component:LogoutComponent},
  {path:'vendor', component:VendorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
