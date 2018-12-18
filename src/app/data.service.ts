import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUsersWithParams() {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('email', 'sydney@fife');
    params = params.append('password', 'pistol');
    return this.http.get('https://reqres.in/api/users?page=2', { params: params });
  }

  registerUser() {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('email', 'sydney@fife');
    params = params.append('password', 'pistol');
    return this.http.post('https://reqres.in/api/rgister', { params: params });
  }

  firstClick() {
    return console.log('clicked');
  }
}
