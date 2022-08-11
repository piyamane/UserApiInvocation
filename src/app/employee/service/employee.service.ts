import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    //return this.http.get(environment.apibaseurl+'Product/ProductList');
    return this.httpClient
      .get<Employee[]>(
        environment.baseUrlEmployee +
          '/getemployees'
      )
      .pipe(map((res) => res));
  }
  public getEmployeeDetails(id: any): Observable<Employee> {
    //return this.http.get(environment.apibaseurl+'Product/ProductList');
    return this.httpClient
      .get<Employee>(
          'https://retoolapi.dev/H2F0Ui/getemployedetail?id'+ id
      )
      .pipe(map((res) => res));
  }
}
