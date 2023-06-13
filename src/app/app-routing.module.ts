import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

const routes: Routes = [

{ path: '', component: VerifyCertificateComponent },

{ path: 'verify-certificate', component: VerifyCertificateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
