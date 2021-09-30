import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-coler',
  templateUrl: './change-coler.component.html',
  styleUrls: ['./change-coler.component.css']
})
export class ChangeColerComponent implements OnInit {
 coler:string="blue"
  constructor() { }

  ngOnInit(): void {
  }

  changeColer(coler:any) {
   this.coler=coler;
  }
}
