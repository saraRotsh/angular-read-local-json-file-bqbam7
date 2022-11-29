import { Component, OnInit } from "@angular/core";
import employees from "../../assets/employees.json";
@Component({
  selector: "app-read-json-using-typescript-import",
  templateUrl: "./read-json-using-typescript-import.component.html",
  styleUrls: ["./read-json-using-typescript-import.component.css"]
})
export class ReadJsonUsingTypescriptImportComponent implements OnInit {
  employeeData: any;

  constructor() {
    this.employeeData = employees;
  }

  ngOnInit() {
  
  }
}
