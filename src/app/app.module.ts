import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReadJsonUsingTypescriptImportComponent } from './read-json-using-typescript-import/read-json-using-typescript-import.component';
import { ReadJsonFileUsingHttpclientComponent } from './read-json-file-using-httpclient/read-json-file-using-httpclient.component';
import { ReadJsonFileUsingEs6Component } from './read-json-file-using-es6/read-json-file-using-es6.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent, ReadJsonUsingTypescriptImportComponent, ReadJsonFileUsingHttpclientComponent,ReadJsonFileUsingEs6Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
