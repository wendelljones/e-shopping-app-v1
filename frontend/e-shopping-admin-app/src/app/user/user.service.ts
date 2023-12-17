import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl:string ="http://18.191.19.66:8282/phase3/customer/findAllUsers";
  constructor(public httpClient:HttpClient) { }

  loadUserDetails():Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }
}