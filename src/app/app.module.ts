import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CarModule } from './Models/car/car.module';
import { TrackModule } from './Models/track/track.module';
import { FamilyCarModule } from './Models/family-car/family-car.module';
import { LocationModule } from './Models/location/location.module';
import { TypeCarModule } from './Models/type-car/type-car.module';
import { UserModule } from './Models/user/user.module';

import { authInterceptorProviders } from './helper/auth.interceptor';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Views/navbar/navbar.component';
import { LeftbarComponent } from './Views/leftbar/leftbar.component';
import { FooterComponent } from './Views/footer/footer.component';

import { ShowTrackingComponent } from './Views/Tracking/show-tracking/show-tracking.component';
import { TrackLocationComponent } from './Views/Tracking/track-location/track-location.component';
import { ListTrackingComponent } from './Views/Tracking/list-tracking/list-tracking.component';
import { StartTrackingComponent } from './Views/Tracking/start-tracking/start-tracking.component';

import { FamilyCarComponent } from './Views/family-car/family-car.component';
import { TypeCarComponent } from './Views/type-car/type-car.component';

import { AddCarComponent } from './Views/add-car/add-car.component';
import { CarComponent } from './Views/car/car.component';
import { EditCarComponent } from './Views/edit-car/edit-car.component';

import { AddUserComponent } from './Views/User/add-user/add-user.component';
import { EditUserComponent } from './Views/User/edit-user/edit-user.component';
import { ListUserComponent } from './Views/User/list-user/list-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    AddUserComponent,
    TrackLocationComponent,
    FamilyCarComponent,
    TypeCarComponent,
    AddCarComponent,
    CarComponent,
    EditCarComponent,
    ListTrackingComponent,
    EditUserComponent,
    ListUserComponent,
    ShowTrackingComponent,
    StartTrackingComponent,
  ],
  imports: [
    UserModule,
    TypeCarModule,
    LocationModule,
    FamilyCarModule,
    CarModule,
    TrackModule,
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
