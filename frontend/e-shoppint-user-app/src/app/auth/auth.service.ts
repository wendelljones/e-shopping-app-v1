import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
//  private baseSignUpUrl:string = "http://localhost:8080/phase2-backend-resapi/UsersSignUpController";
//  private baseSignInUrl:string = "http://localhost:8080/phase2-backend-resapi/UsersSignInController";
    private baseSignUpUrl:string = "http://18.191.19.66:8282/phase3/customer/signUp";
    private baseSignInUrl:string = "http://18.191.19.66:8282/phase3/customer/signIn";
    // private baseSignUpUrl:string = "http://localhost:9090/login/signUp";
    // private baseSignInUrl:string = "http://localhost:9090/login/signIn";
  constructor(public http:HttpClient) { }  
  get isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  logout() {
      this.loggedIn.next(false);
  }
  login() {
    this.loggedIn.next(true);
  }
  // signIn():Observable<User[]> {
  //   return this.http.get<User[]>("http://localhost:3000/users");    
  // }

  signIn(patient:any):Observable<string> {
    return this.http.post(this.baseSignInUrl,patient,{responseType:'text'});    
  }

  signUp(patient:any):Observable<string> {
    return this.http.post(this.baseSignUpUrl,patient,{responseType:'text'});
  }
}

