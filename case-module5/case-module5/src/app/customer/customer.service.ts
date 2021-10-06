import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../module/customer';
import {TypeCustomer} from '../module/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = 'http://localhost:3000/customerList';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL);
  }

  save(customer: Customer): Observable<void> {
    return this.http.post<void>(this.URL, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/' + id);
  }

  findById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.URL + '/' + id);

  }
  update(customer: Customer): Observable<void> {
    // this.findAllTypeCustomer().subscribe(value => {
    //   this.typeCustomers = value;
    //   let typeCustomerCreate = customer.typeCustomer.name;
    //   for (let i = 0; i < this.typeCustomers.length; i++) {
    //     if (this.typeCustomers[i].name == typeCustomerCreate) {
    //       customer.typeCustomer = this.typeCustomers[i];
    //       break;
    //     }
    //   }
    // });
    return this.http.put<void>(this.URL + '/' + customer.id, customer);
  }

  findAllTypeCustomer(): Observable<TypeCustomer[]> {
    return this.http.get<TypeCustomer[]>('http://localhost:3000/typeCustomerList');
  }
  //
  // sortId(count: number): Observable<Customer[]>{
  //   if (count%2==0){
  //     return this.http.get<Customer[]>('http://localhost:3000/customerList?_sort=id&_order=desc');
  //
  //   }else {
  //     return this.http.get<Customer[]>('http://localhost:3000/customerList?_sort=id&_order=asc');
  //   }
  // }
}
