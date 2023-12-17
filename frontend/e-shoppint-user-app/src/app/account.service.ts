import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // public baseUrl:string="http://localhost:8080/phase2-backend-resapi/AccountController";
  public baseUrl:string="http://3.17.177.114:8282/phase3/customer/account";
  constructor(public httpClient:HttpClient) { }

  findBalance(emailid:any):Observable<any> {
    return   this.httpClient.get(this.baseUrl+"/findBalance?email="+emailid);
  }
}
