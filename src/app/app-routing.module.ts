import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WebapiComponent } from './webapi/webapi.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard] // protect this component
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'api',
    component: WebapiComponent,
    canActivate: [MsalGuard]
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // don't perform init navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
