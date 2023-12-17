import { Injectable } from '@angular/core';
import { Order } from './order';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderData = new BehaviorSubject<Order[]>([]);

  get getOrder(){
    return this.orderData.asObservable();
  }

  //public baseUrl:string="http://localhost:3000/orders";
  // public baseUrl:string="http://localhost:8080/phase2-backend-resapi/OrdersController";
  public baseUrl:string="http://3.17.177.114:8282/phase3/customer/orders";
  constructor(public httpClient:HttpClient) { }
  
  orderPlaced(order:Order):Observable<any> {
    return this.httpClient.post(this.baseUrl+"/placeOrder",order,{responseType:'text'});
  }

  viewOrdersByUser(email: any): Observable<any[]> {
    return this.httpClient.get(this.baseUrl + "/viewOrderByUser?email=" + email).pipe(
      map((result: any) => result.map((order: any) => {
        // Adjust property names based on your entity structure
        return {
          orderid: order.orderid,
          orderDate: order.orderDate,
          orderStatus: order.orderStatus,
          products: order.products,
          totalItems: order.totalItems,
          itemsSubTotal: order.itemsSubTotal,
          shipmentCharges: order.shipmentCharges,
          totalAmount: order.totalAmount,
          paymentStatus: order.paymentStatus,
          paymentMethodTitle: order.paymentMethodTitle,
          email: order.email,
          pid: order.pid
        };
      }))
    );
  }
  
}