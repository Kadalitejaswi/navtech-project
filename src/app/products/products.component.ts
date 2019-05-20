import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:Http) { }
  orderObj:object={};

  addNewOrder=function(product)
  {
    this.orderObj=
    {
      "name":product.name,
      "orderdate":product.date,
      "customer":product.customerName,
      "address":product.address,
      "phone":product.phone,
      "ordertotal":product.total
    }
    this.http.post("http://localhost:3000/products",this.orderObj).subscribe((res:Response)=>{
      console.log(res);
      alert("Your order is Placed Sucessfully")


    })
    

  }
  ngOnInit() {
  }

}
