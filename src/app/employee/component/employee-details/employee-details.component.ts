import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetailForm!: FormGroup;
    id: number =0;
    name: string ='';
    company: string ='';
    designation: string='';
    company_logo: string='';
    employee!: Employee;
  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService) { 
    this.employeeDetailForm = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required],
      designation: ['', Validators.required],
      logo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    this.employeeService.getEmployeeDetails(this.id)
      .subscribe(
        data => {
          this.employee = data;
          this.employeeDetailForm.patchValue({
            id: this.employee.id,
            name: this.employee.name,
            company:this.employee.company,
            designation:this.employee.designation,
            company_logo: this.employee.company_logo
          });
        },
        error => {
          console.log(error);
        });
  }
}
