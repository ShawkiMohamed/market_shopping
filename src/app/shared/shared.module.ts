import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    // added by me
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports : [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
