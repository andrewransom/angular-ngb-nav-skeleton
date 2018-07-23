import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BASE_APP_ROUTES} from '../app-routing/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  routeList: Routes = BASE_APP_ROUTES;

  constructor() {

   }

  ngOnInit() {
    
  }

  toggleCollapsed(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
