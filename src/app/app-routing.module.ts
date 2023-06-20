import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

const routes: Routes = [

{ path: '', component: ScanQrCodeComponent },

// { path: 'verify-certificate', component: VerifyCertificateComponent },

// { path: 'scan-code', component: ScanQrCodeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
