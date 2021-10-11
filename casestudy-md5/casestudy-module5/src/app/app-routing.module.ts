import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';

import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-add', component: EmployeeAddComponent},
  {path: 'employee-edit/:id',component:EmployeeEditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [EmployeeEditComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
