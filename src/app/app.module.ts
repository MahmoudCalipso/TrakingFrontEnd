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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './helper/auth.interceptor';

import { AgmCoreModule } from '@agm/core';
import { TrackingComponent } from './tracking/tracking.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollebarComponent } from './scrollebar/scrollebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    TrackingComponent,
    NavbarComponent,
    FooterComponent,
    ScrollebarComponent
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
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYbZu76P-IhTFCrh3k46SN662xbkgpK68'
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
