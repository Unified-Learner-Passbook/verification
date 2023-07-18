import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuarModule } from '@altack/quar';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import * as config from '../assets/config/config.json';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';

let configData = {
  baseUrl: `${config.bffUrl}/v1/credentials`
}

@NgModule({
  declarations: [
    AppComponent,
    // VerifyCertificateComponent,
    ScanQrCodeComponent,
    DocViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // VerifyModule.forChild(configData),
    // ZXingScannerModule,
    QuarModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
