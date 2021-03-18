import { formatDate } from '@angular/common';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LocationModule } from 'src/app/Models/location/location.module';
import { TrackModule } from 'src/app/Models/track/track.module';
import { CarService } from 'src/app/Services/car.service';
import { LocationService } from 'src/app/Services/location.service';
import { TokenService } from 'src/app/Services/token.service';


@Component({
  selector: 'app-start-tracking',
  templateUrl: './start-tracking.component.html',
  styleUrls: ['./start-tracking.component.css']
})
export class StartTrackingComponent implements OnInit {
loc: GeolocationPosition;
isTracking: boolean;
track: number;

@ViewChild('map') mapElement: ElementRef;
map: any;

markers = [];
startDate: any;
endDate: any;
UserID: number;
  carid: number;
  latitude: any;
  longitude: any;
  speed: any;
  timestamp: any;
  id_loc: number;

 constructor(private locationService: LocationService,
             private tokenService: TokenService,
             private carService: CarService) { }
  ngOnInit(): void{
    this.isTracking = false;
    if (this.tokenService.getUser() !== null){
       this.UserID = this.tokenService.getUser();
    }
   // this.checkGPSPermission();
   // this.requestGPSPermission();
    this.carService.getUseCars();
  }

// Check if application having GPS access permission

/*
async checkGPSPermission(): Promise<boolean>  {
  return await new Promise((resolve, reject) => {
    if (Capacitor.isNative) {
      AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
        result => {
            if (result.hasPermission) {
                // If having permission show 'Turn On GPS' dialogue
                resolve(true);
            } else {
                // If not having permission ask for permission
                resolve(false);
            }
        },
        err => { alert(err); }
      );
    }
    else { resolve(true);  }
  })
}

async requestGPSPermission(): Promise<string> {
  return await new Promise((resolve, reject) => {
      LocationAccuracy.canRequest().then((canRequest: boolean) => {
        if (canRequest) {
            resolve('CAN_REQUEST');
        } else {
          // Show 'GPS Permission Request' dialogue
          AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
            .then(
              (result) => {
                if (result.hasPermission) {
                    // call method to turn on GPS
                    resolve('GOT_PERMISSION');
                } else {
                    resolve('DENIED_PERMISSION');
                }
              },
              error => {
                // Show alert if user click on 'No Thanks'
                alert('requestPermission Error requesting location permissions ' + error);
              }
          );
        }
      });
  })
}

private getDeviceLocation(): Promise<any> {
  return new Promise((resolve, reject) => {
      Geolocation.enableLocationRequest().then(() => {
          Geolocation.getCurrentLocation({timeout: 5000}).then(location => { 
            resolve(location);   
          }).catch(error => {
            reject(error);
          });
      });
  });
}
startTracking(): void{
    this.isTracking = true;
    this.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    // this.LocationService .Add(userid, carid , startdate)
    const loca = new LocationModule();
    loca.UserId = this.UserID;
    loca.StartDate = this.startDate;
    loca.CarId = this.carid;
    var loc= this.locationService.SaveTracking(loca);
    const id_loc = this.loc.LocationId;
    setTimeout(() => {
      this.getDeviceLocation().then(result => {
        this.latitude = result.latitude;
        this.longitude = result.longitude;
        this.speed = result.speed;
        this.timestamp = result.timestamp;
     
            Save coord Tr
        const track = new TrackModule();
        track.latitude = this.latitude;
        track.longitude = this.longitude;
        track.speed = this.speed;
        track.timestamp = this.timestamp;
        track.LocationId = id_loc;
      
           call service track to save it 
         

            this.trackService.save(track);
    }, error => {
        console.error(error);
    });
      this.updateMap(result);
      this.map.setCenter(result);
      this.map.setZoom(8);
  }));
}, 5000);
      
    
  }
  // Unsubscribe from the geolocation watch using the initial ID
  stopTracking(): void {
    const currentDate = new Date();
    const endDate = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    
    this.locationService.SaveTracking(data);
    navigator.geolocation.clearWatch(this.track);
    this.isTracking = false;
  }

  
  // Redraw all markers on the map
  updateMap(locations): void{
    // Remove all current marker
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];

    for (const loc of locations) {
      const latLng = new google.maps.LatLng(loc.lat, loc.lng);
      const marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        speed: loc.speed
      });
      this.markers.push(marker);
    }
  }
   */
}
