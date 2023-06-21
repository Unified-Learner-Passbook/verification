import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocViewComponent } from './doc-view/doc-view.component';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

const routes: Routes = [

{ path: '', component: ScanQrCodeComponent },

// { path: 'verify-certificate', component: VerifyCertificateComponent },

// { path: 'scan-code', component: ScanQrCodeComponent },

{ path: 'doc-view', component: DocViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
