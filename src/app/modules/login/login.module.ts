import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import  HeaderComponent  from '../../shared/components/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import LoginComponent from "./login.component"


@NgModule({
  declarations: [ [LoginComponent] ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    BreadcrumbModule,
    // HeaderComponent,
    // FooterComponent
    
  ],
  exports: [
    [LoginComponent],

    
  ]
})
export class LoginModule { }
