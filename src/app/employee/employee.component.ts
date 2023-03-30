import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Employee } from '../interfac/employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Emp } from '../interfac/emp';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  loading: boolean = true;
  users!:Employee[];
  employee: any ;
  
  constructor(private httpService: HttpService,private router: Router,) {}

  ngOnInit(): void {
    
    this.httpService.getEmployees().subscribe((data: Emp) => {
      this.users = data.data;
      console.log(data);
      this.loading = false;
      this.createEmployee();
    });
  }
  showDetails(id: string) {
    this.router.navigate(['/employee', id]);
    this.employee=this.users;
    console.log(this.employee);
    
  }
  
  createEmployee() {
    this.router.navigate(['employee-form']);
  }
  deleteEmployee(id: number) {
    if (id === undefined) {
      return;
    }
    this.httpService.deleteEmployee(id).subscribe(
      () => {
        console.log("data deleted");
       },
      
    );
  }
}

