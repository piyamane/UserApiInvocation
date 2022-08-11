import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router){
    this.loginForm = formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(){
    
  }
  public login(): void {
    this.loginService.login(this.loginForm.controls['userId'].value,
    this.loginForm.controls['password'].value).subscribe((res)=>{
      if(res){
        this.router.navigate(['/', 'employeeList']);
        Swal.fire('Thank you...', `${res[0].name} logged in succesfully!`, 'success');
      }
    })
  }

}