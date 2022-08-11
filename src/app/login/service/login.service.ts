import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(userId: string, password: string): Observable<User[]>{
    let params = new HttpParams();
    params = params.append('user_id', userId);
    params = params.append('password', password);
    return this.httpClient
      .get<User[]>(
        environment.baseUrlUser +
          '/getusers', {params: params}
      )
      .pipe(map((res) => res));
  }
  
}
