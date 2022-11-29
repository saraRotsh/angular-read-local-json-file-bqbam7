import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-read-json-file-using-httpclient',
  templateUrl: './read-json-file-using-httpclient.component.html',
  styleUrls: ['./read-json-file-using-httpclient.component.css']
})
export class ReadJsonFileUsingHttpclientComponent implements OnInit {
  employeeData:any;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    this.httpClient.get<any>("assets/employees.json").subscribe((data)=>
      this.employeeData = data
    )
  }
 

}