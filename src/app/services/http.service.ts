import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfac/employee';
import { environment } from 'src/environments/environment.development';
import { Emp } from '../interfac/emp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
  private employees: Employee[] = [];
  constructor(private httpService :HttpClient) { }

getEmployees():Observable<Emp>{
  return this.httpService.get<Emp>("https://dummy.restapiexample.com/api/v1/employees");
}

getEmployeeDetail(id:number):Observable<Emp>{
  return this.httpService.get<Emp>("https://dummy.restapiexample.com/api/v1/employee/"+id);
}
addEmployee(employee: Employee) {
 return this.employees.push(employee);
}
deleteEmployee(id: number) {
  return this.httpService.delete(`${this.apiUrl}/${id}`);
}
}
