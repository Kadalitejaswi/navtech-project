import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number;
data:object={};
orders=[];
orderObj:object={};
private headers=new Headers({'Content-Type':'application/json'});


  constructor(private router:Router,private route:ActivatedRoute,private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
      {
this.id=+params['id'];
      });
      
        this.http.get("http://localhost:3000/products").subscribe((res:Response)=>
        {
          this.orders=res.json();
          for(var i=0;i<this.orders.length;i++)
          {
            if(parseInt(this.orders[i].id)===this.id)
            {
this.data=this.orders[i];
break;
            }
          }
        })
  }

  editOrder(order)
  {
this.orderObj={
  "name":order.name,
  "orderdate":order.date,    
  "customer":order.customerName,   
  "address":order.address,
  "phone":order.phone
};
const url=`${"http://localhost:3000/products"}/${this.id}`;
this.http.put(url,JSON.stringify(this.orderObj),{headers:this.headers}).
toPromise().
then(()=>
{
  this.router.navigate(['/home'])
})
  }

}
