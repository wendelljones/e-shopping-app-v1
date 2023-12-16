import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  private baseSignInUrl:string = "http://13.59.141.59:8181/phase3/admin/signIn";

  constructor(public http:HttpClient) { }   // DI for HttpClent
  
  get isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  logout() {
      this.loggedIn.next(false);
  }
  login() {
    this.loggedIn.next(true);
  }
  
  // MANUAL HARD CODED ADMIN ACCESS
  // http.get()
  // signIn(admin:Admin):boolean {
  //   if(admin.emailid=="admin@gmail.com" && admin.password=="admin@123"){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }
/*
    signIn(admin:Admin):boolean {
      this.http.post("http://localhost:8080/phase2-backend-resapi/AdminController",admin, {responseType:'text'}).subscribe({
        next:(result:any) => {
          console.log(result)
        },
        error:(error:any) => {
          console.log(error)
        },
        complete:() => {
          console.log("We're done here. Complete")
        }
      })
    return false;
    }
*/

signIn(admin:Admin):Observable<String> {
  // return this.http.post("http://localhost:8080/phase2-backend-resapi/AdminController", admin, {responseType:'text'})
  //return this.http.post("http://localhost:8181/phase3/admin/signIn", admin, {responseType:'text'})
  return this.http.post(this.baseSignInUrl,admin,{responseType:'text'});
}


}