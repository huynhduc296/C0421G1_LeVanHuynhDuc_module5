import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
public formAddNewEmployee: FormGroup
  public maxDate = new Date();
  public minDate = new Date(1900,0,1);
  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeeService,
    public router: Router
  ) { }

  ngOnInit(): void {
  this.formAddNewEmployee = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    position: ['',[Validators.required]],
    level: ['', [Validators.required]],
    part: ['', [Validators.required]],
    dateOfBirth: ['',[Validators.required]],
    idCart: ['', [Validators.required,Validators.pattern('^[0-9]{9}$')]],
    salary: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.required,Validators.email]],
    phone: ['' ,[Validators.required,Validators.pattern('^(090|091|([/(]84[/)][/+]90)|([/(]84[/)][/+]91))[0-9]{7}$')]],
    address: ['',[Validators.required]]
  });
  }

  addNewEmployee() {
    this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(date => {
     this.router.navigateByUrl('employee-list');
    });
    console.log(this.formAddNewEmployee)
  }
}
