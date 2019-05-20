import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {AlertModule} from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    EditComponent,
    LoginComponent
    
   
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      
{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent},

{path:"product",component:ProductsComponent},
{path:"editOrder/:id",component:EditComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
