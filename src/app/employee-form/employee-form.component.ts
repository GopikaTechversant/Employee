import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Employee } from '../interfac/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: ''
  };

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   const newEmployee: Employee = {
  //     id:0,
  //     employee_name: this.employee.employee_name,
  //     employee_salary: this.employee.employee_salary,
  //     employee_age: this.employee.employee_age,
  //     profile_image: ''
  //   };
  //   this.httpService.addEmployee(newEmployee);
  //   this.router.navigate(['/employee']);
  // }
}
