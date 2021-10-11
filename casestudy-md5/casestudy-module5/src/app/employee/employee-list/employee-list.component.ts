import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees
  term: any;
  p: any;
  constructor(
   public employeeService: EmployeeService,
  public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  openDialog(employeeID): void {
    this.employeeService.getEmployeeByID(employeeID).subscribe(dataOfEmployee =>{
      const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
        width: '400px',
        data: {data1: dataOfEmployee}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    })
  }
}
