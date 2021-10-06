import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CustomerRoutingModule} from './customer-routing.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';



@NgModule({
  declarations: [ CustomerCreateComponent, CustomerListComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class CustomerModule { }
