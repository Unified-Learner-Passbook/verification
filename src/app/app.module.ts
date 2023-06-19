import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyModule } from 'vc-verification';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';
import { environment } from '../environments/environment';
import { AppConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import * as config from '../assets/config/config.json';


let configData = {
  baseUrl: `${config.bffUrl}/v1/credentials`
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
