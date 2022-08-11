import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { LoginComponent } from './login/component/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'employeeList' ,component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  FormsModule,
ReactiveFormsModule]
})
export class AppRoutingModule { }
