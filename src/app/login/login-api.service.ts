import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from './login.types';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private baseUrl = 'https://hub.cobiro.com/v1/';

  constructor(protected http: HttpClient) { }

  login({email, password}: {
    email: string;
    password: string;
  }): Observable<LoginDTO> {
    return this.http.post(`${this.baseUrl}/login`, {
      payload: {
        data: {
          type: 'login',
          attributes: {
            email,
            password
          }
        }
      }
    })
  }
}
