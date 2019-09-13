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
    let response = this.http.post(environment.apiBaseUrl + url, user);
    return response;
  }

  get(url){
    let response = this.http.get(environment.apiBaseUrl + url);
    return response;
  }

}
 