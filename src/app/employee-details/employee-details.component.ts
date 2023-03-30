import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Emp } from '../interfac/emp';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],


})
export class EmployeeDetailsComponent implements OnInit{
 
  user:Emp;
  id:any;
  
  employeeDetail:any = [];
  
   user_id: number = 0 ;
   
  constructor(private activatedRoute:ActivatedRoute,private httpService:HttpService,
    ){
    this.user ={
      status:'',
      data:[],
      message:''
    }
  }
  ngOnInit(): void {
      
      this.activatedRoute.params.subscribe((datas:any) =>{
      console.log(datas);
      this.id=datas['id'];
      this.apiFun();
      
      
    })
  }
  
  apiFun():void{
    console.log(this.id);
    this.httpService.getEmployeeDetail(this.id).subscribe((data: Emp) => {
      
      this.employeeDetail = data.data;
                                                                                                                                                                                                                                                                                                                                                     
    });
 }
 
 
}
