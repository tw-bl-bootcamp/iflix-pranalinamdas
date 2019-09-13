import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  postLogin(user: User, url) {
    console.log("login data in http ==>", user);

    let response = this.http.post(environment.apiBaseUrl + url, user);
    console.log("response in http ==>",response);
    return response;
  }

}
