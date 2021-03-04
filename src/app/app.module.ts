import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarModule } from './Models/car/car.module';
import { FamilyCarModule } from './Models/family-car/family-car.module';
import { LocationModule } from './Models/location/location.module';
import { TypeCarModule } from './Models/type-car/type-car.module';
import { UserModule } from './Models/user/user.module';

import { authInterceptorProviders } from './helper/auth.interceptor';



import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { LeftbarComponent } from './Views/leftbar/leftbar.component';
import { FooterComponent } from './Views/footer/footer.component';
import { AddUserComponent } from './Views/User/add-user/add-user.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    AddUserComponent,
  ],
  imports: [
    UserModule,
    TypeCarModule,
    LocationModule,
    FamilyCarModule,
    CarModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
