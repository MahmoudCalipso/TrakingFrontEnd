import { Component, OnInit, Injectable } from '@angular/core';
import {TokenService} from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TrakingFrontEnd';
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  FirstName: string;
  constructor(private tokenStorageService: TokenService){}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.FirstName = user.FirstName;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
