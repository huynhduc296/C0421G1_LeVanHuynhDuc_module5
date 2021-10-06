import { Component, OnInit } from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../customer.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  length: number;
  customers: Customer[];
  nameDelete: string;
  idDelete: number;
  page = 1;
  pageSize = 4;
  message = '';
  limit = 2;
  constructor(private customerService: CustomerService,
              private router: Route) { }

  ngOnInit(): void {
    this.loadList();
  }

  sortId() {

  }

  private loadList() {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
      this.length = data.length;
    });
  }
  deleteById(id: number) {
    this.customerService.deleteById(Number(id)).subscribe(value => {

    }, error => {

    }, () => {
      this.loadList();

    });
  }

  passData(idFromView: number, nameFromView: string) {
    this.nameDelete = nameFromView;
    this.idDelete = idFromView;
  }
}
