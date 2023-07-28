import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { OrganizationComponent } from './organization/organization.component';
import { VerificationComponent } from './verification/verification.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [

  { path: '', component: ScanQrCodeComponent },
  { path: 'verify/:credentialId', component: ScanQrCodeComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'tool', component: ToolbarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
