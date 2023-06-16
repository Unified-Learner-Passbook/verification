import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyModule } from 'vc-verification';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';
import { environment } from '../environments/environment';

// let baseConfig = require('../assets/config/config.json')

// let configData = {
//   baseUrl: baseConfig['baseUrl']
// }

let configData = {
  baseUrl: `${environment.baseUrl}/auth`
}



@NgModule({
  declarations: [
    AppComponent,
    VerifyCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VerifyModule.forChild(configData),
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
