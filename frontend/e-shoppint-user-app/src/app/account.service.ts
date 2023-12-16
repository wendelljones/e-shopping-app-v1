import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // public baseUrl:string="http://localhost:8080/phase2-backend-resapi/AccountController";
  public baseUrl:string="http://13.59.141.59:8282/phase3/customer/account";
  constructor(public httpClient:HttpClient) { }

  findBalance(emailid:any):Observable<any> {
    return   this.httpClient.get(this.baseUrl+"/findBalance?email="+emailid);
  }
}
