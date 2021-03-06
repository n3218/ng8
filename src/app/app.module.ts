import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service'
import { HttpClientModule } from '@angular/common/http';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNoFoundComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
