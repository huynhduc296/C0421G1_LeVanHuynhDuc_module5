import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MaterialModule} from './material.module';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import {EmployeeDeleteComponent} from './employee/employee-delete/employee-delete.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent, PageNotFoundComponent, EmployeeListComponent, EmployeeAddComponent, EmployeeDeleteComponent
  ],
    imports: [
        BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      Ng2SearchPipeModule,
      FormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
