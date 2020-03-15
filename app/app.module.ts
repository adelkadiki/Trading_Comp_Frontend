import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatSortModule, MatTableModule, MatDialogModule} from '@angular/material';
import {HttpInterceptService} from './services/http-intercept.service';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { VendorInfoComponent } from './components/vendor-info/vendor-info.component';
import { ProductComponent } from './components/product/product.component';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { UpdateVendorComponent } from './components/update-vendor/update-vendor.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientComponent } from './components/client/client.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { SalesComponent } from './components/sales/sales.component';
import { AddSalesComponent } from './components/add-sales/add-sales.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DialogComponent } from './components/dialog/dialog.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    VendorComponent,
    AddVendorComponent,
    VendorInfoComponent,
    ProductComponent,
    EditVendorComponent,
    UpdateVendorComponent,
    UpdateProductComponent,
    AddClientComponent,
    ClientComponent,
    AddProductComponent,
    ClientInfoComponent,
    SalesComponent,
    AddSalesComponent,
    SalesListComponent,
    InvoiceComponent,
    DialogComponent,
   
  ],
  entryComponents:[DialogComponent],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatSortModule,  MatTableModule, MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
