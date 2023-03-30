import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
const routes: Routes = [
  {path: '', component: EmployeeComponent },
  {path: 'employee/:id', component: EmployeeDetailsComponent },
  {path: 'employee-form', component: EmployeeFormComponent },
  {path:'',redirectTo:'employee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
