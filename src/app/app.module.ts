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
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { QuarModule } from '@altack/quar';


let configData = {
  baseUrl: `${config.bffUrl}/v1/credentials`
}



@NgModule({
  declarations: [
    AppComponent,
    VerifyCertificateComponent,
    ScanQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VerifyModule.forChild(configData),
    ZXingScannerModule,
    QuarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
