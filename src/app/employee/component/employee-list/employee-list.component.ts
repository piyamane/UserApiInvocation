import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  modalRef!: BsModalRef;
  
  constructor(private employeeService: EmployeeService,
    public modalService: BsModalService) { }

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
  
//   openAddEmployeeDetailDialog(){
    
//     this.modalRef = this.modalService.show(AddEmployeeComponent, {
//       animated: true,
//       backdrop: 'static',
//       class: 'modal-md',
//     });
//     this.modalRef.content.employeeAdded.subscribe((res: any) => {
//       if (res) {
//         this.getAllEmployee();
//       }
//     });
    

//   }
  viewEmployeeViewModal(row: Employee){
    const employeeObj: Employee = {
      id: row.id,
      name: row.name,
      company: row.company,
      designation: row.designation,
      company_logo: row.company_logo,
   };
  this.modalRef = this.modalService.show(EmployeeDetailsComponent, {
    initialState: employeeObj,
    animated: true,
    backdrop: 'static',
    class: 'modal-md',
  });
  this.modalRef.content.productEdited.subscribe((res: any) => {
    if (res) {
      this.getAllEmployee();
      this.modalRef.hide();
    }
  });
  }
//  viewEditModal(row: Employee){
//    const employeeObj = {
//     employeeId: row.id,
//     employeeName: row.employee_name,
//     userId: row.employee_user_id,
//     pasword: row.employee_password,  
//    };
//   this.modalRef = this.modalService.show(EditEmployeeComponent, {
//     initialState: employeeObj,
//     animated: true,
//     backdrop: 'static',
//     class: 'modal-md',
//   });
//   this.modalRef.content.productEdited.subscribe((res: any) => {
//     if (res) {
//       this.getAllEmployee();
//       this.modalRef.hide();
//     }
//   });
//  }
  
//  deleteEmployee(employee: Employee){
//     this.productService.deleteEmployee(employee.id)
//       .subscribe(
//         data => {
//           this.getAllEmployee();
//         },
//         error => {
//           console.log(error);
//         });
//   }
//   onOptionsSelected(val:any) {
//     console.log(val);
    
//   }
}

