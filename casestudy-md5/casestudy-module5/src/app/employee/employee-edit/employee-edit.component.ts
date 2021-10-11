import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  public formEditEmployee: FormGroup
  public maxDate = new Date();
  public minDate = new Date(1900,0,1);
  public employeeOfId;
  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeeService,
    public router: Router,
    public activateRoiter:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formEditEmployee = this.formBuilder.group({
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

    this.activateRoiter.params.subscribe(data =>{
       this.employeeOfId=data.id;
       this.employeeService.getEmployeeByID(this.employeeOfId).subscribe(data =>{
         this.formEditEmployee.patchValue(data);
       })
    })
  }

  editEmployee() {

  }
}
