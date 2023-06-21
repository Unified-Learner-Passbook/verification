import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as JSZip from 'jszip';
import { concatMap, map } from 'rxjs/operators';
import { QuarComponent } from '@altack/quar';
import { DataService } from '../services/data.service';
import { CredentialService } from '../services/credential/credential.service';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.component.html',
  styleUrls: ['./scan-qr-code.component.scss']
})
export class ScanQrCodeComponent implements OnInit {
  loader: boolean = false;
  invalidQRCode: boolean = false;
  qrString: string;
  entity: any;
  model;
  isScanCompleted = false;
  scanQrCode = true
  verified = false
  expired = false
  notVerified = false
  credential: any
  @ViewChild(QuarComponent) private quar: QuarComponent;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dataService: DataService,
    private readonly credentialService: CredentialService
  ) { }

  ngOnInit(): void {
    this.scanQrCode = true
    this.isScanCompleted = true;
    this.verified = false
    this.expired = false
    this.notVerified = false
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['entity']) {
        this.entity = params['entity'];
      }
    })
  }

  scanSuccessHandler(event: any) {
    this.loader = true;
    this.qrString = event;
    this.isScanCompleted = true;
    console.log("event", event);
    if (event) {

      // this.dataService.verify(event).subscribe((res: any) => {
      //   console.log(res)
      //   console.log(res.checks[0].expired)
      //   if (res.checks[0].expired == 'OK') {
      //     this.loader = false
      //     this.verified = true
      //   } else {
      //     this.loader = false
      //     this.verified = true
      //     this.expired = true
      //   }

      // }, error => {
      //   this.loader = false
      //   this.invalidQRCode = true
      //   this.notVerified = true
      //   console.log(error)
      // })

      try {
        let url: string;
        let credentialId;
        if (this.qrString.startsWith('http://') || this.qrString.startsWith('https://')) {
          url = new URL(this.qrString).pathname;
          const part = url.split('/');
          credentialId = part[2];
          console.log("CredentialId", credentialId);
        }

        let credential;
        if (credentialId) {

          this.dataService.verify(credentialId).subscribe((res: any) => {
            console.log(res)
            console.log(res.result.checks[0].expired)
            if (res.result.checks[0].expired == 'OK') {
              this.loader = false
              this.verified = true
            } else {
              this.loader = false
              this.verified = true
              this.expired = true
            }
    
          }, error => {
            this.loader = false
            //this.invalidQRCode = true
            this.notVerified = true
            console.log(error)
          })
          

          this.credentialService.getToken().pipe(concatMap(_ =>
            this.credentialService.getCredentialById(credentialId).pipe(map(res => {
              credential = res;
              console.log("res", res);
              return res;
            }))),
            concatMap(_ => this.credentialService.getCredentialSchemaId(credentialId)),
            concatMap((res: any) => {
              console.log("res", res);
              credential.schemaId = res.credential_schema;
              return this.credentialService.getSchema(res.credential_schema).pipe(
                map((schema: any) => {
                  credential.credential_schema = schema;
                  return credential;
                })
              );
            })
          ).subscribe((res: any) => {
            console.log(res)
            //this.loader = false;
            const navigationExtras = {
              state: credential
            };
            this.credential = credential
            //this.isScanCompleted = false;
            //this.router.navigate(['/doc-view'], navigationExtras);
          }, (error: any) => {
            this.loader = false;
            this.notVerified = true
            //this.invalidQRCode = true;
            this.restartScanning();
          });

        } else {
          this.loader = false;
          //this.invalidQRCode = true;
          this.notVerified = true
          this.restartScanning();
        }
      } catch (error) {
        this.loader = false;
        this.invalidQRCode = true;
        // this.toastService.error("", this.generalService.translateString('INVALID_QR_CODE_OR_ERROR_WHILE_FETCHING_DATA'));
        this.restartScanning();
      }

    }
  }

  restartScanning() {
    if (this.quar) {
      this.quar.resumeScanner();
    }
  }

  onError(error) {
    console.error(error)
  }

  scanAgain() {
    this.restartScanning();
    this.invalidQRCode = false
    this.isScanCompleted = false;
    this.verified = false;
    this.notVerified = false
    this.credential = false
  }

  scan() {
    console.log("scan")
    this.scanQrCode = false
    this.isScanCompleted = false
  }

  back() {
    this.scanQrCode = true
    this.isScanCompleted = true;
    this.verified = false
    this.notVerified = false
  }


}
