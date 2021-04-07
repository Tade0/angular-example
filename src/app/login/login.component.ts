import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginApiService } from './login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(protected loginApiService: LoginApiService) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    this.loginApiService.login({
      email: '',
      password: ''
    })
    .subscribe(() => {
      
    }, (error) => {

    });
  }

}
