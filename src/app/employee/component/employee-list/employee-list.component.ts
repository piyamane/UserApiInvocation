import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from '../../service/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee []=[];
  
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList =[];
   this.getAllEmployee();
  }
  
  getAllEmployee(): void {
    this.employeeService.getEmployees()
      .subscribe(
        data => {
          debugger
          this.employeeList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  viewEmployeeViewModal(row: Employee){
  //   const employeeObj: Employee = {
  //     id: row.id,
  //     name: row.name,
  //     company: row.company,
  //     designation: row.designation,
  //     company_logo: row.company_logo,
  //  };
  // this.modalRef = this.modalService.show(EmployeeDetailsComponent, {
  //   initialState: employeeObj,
  //   animated: true,
  //   backdrop: 'static',
  //   class: 'modal-md',
  // });
  // this.modalRef.content.productEdited.subscribe((res: any) => {
  //   if (res) {
  //     this.getAllEmployee();
  //     this.modalRef.hide();
  //   }
  // });
  }

  key: string ='id';
  reverse:boolean = false;
  sort(key: string){
    this.key= key;
    this.reverse =!this.reverse;
  }
  }




