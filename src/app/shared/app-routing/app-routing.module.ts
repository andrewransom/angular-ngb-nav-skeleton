import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';
import { AuthTestComponent } from '../../pages/auth-test/auth-test.component';

/*  Import components that are navigation targets here */
//import {HomeComponent} from '../../pages/home/home.component';
// import {AuthGuardService} from '../auth/auth-guard.service';

export const BASE_APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, data: { navTitle: 'Home'} },
  { path: 'authtest', component: AuthTestComponent, data: { navTitle: 'Auth Test'} },
  { path: 'about', component: AboutComponent, data: { navTitle: 'About'} }
];

const DEFAULT_APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutes: Routes = [].concat(BASE_APP_ROUTES,DEFAULT_APP_ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
