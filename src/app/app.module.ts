import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

const clientID = '338b6056-dd6c-4ac4-b1c6-23244be12c81'

const tenantID = '6ec7db24-8dbb-4e81-9e9b-3973b83f674e'
const cloudInstance = 'https://login.microsoftonline.com'
const authority = cloudInstance + '/' + tenantID

const redirectURI = 'http://localhost:4200'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: clientID, // app client id
        authority: authority, // tenant id
        redirectUri: redirectURI // redirect uri
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // true if IE 11
      }
    }), null, null)
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent] // MsalRedirectComponent bootstrapped
})
export class AppModule { }
