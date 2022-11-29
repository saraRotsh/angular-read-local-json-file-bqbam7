import { Component, OnInit } from '@angular/core';
import employees from "../../assets/employees.json";

@Component({
  selector: 'app-read-json-file-using-es6',
  templateUrl: './read-json-file-using-es6.component.html',
  styleUrls: ['./read-json-file-using-es6.component.css']
})
export class ReadJsonFileUsingEs6Component implements OnInit {
employeeData: any;

  constructor() {
    this.employeeData = employees;
  }

  ngOnInit() {
  
  }

}