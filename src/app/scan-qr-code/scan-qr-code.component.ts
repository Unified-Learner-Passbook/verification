import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as JSZip from 'jszip';
import { concatMap, map } from 'rxjs/operators';
import { QuarComponent } from '@altack/quar';
import { DataService } from '../services/data.service';

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
  notVerified = false
  @ViewChild(QuarComponent) private quar: QuarComponent;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
    this.scanQrCode = true
    this.isScanCompleted = true;
    this.verified = false
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

      this.dataService.get(event).subscribe((res: any) => {
        console.log(res)
        this.loader = false
        //this.verified = true
        this.notVerified = true

      }, error => {
        this.loader = false
        this.invalidQRCode = true
        this.notVerified = true
        console.log(error)
      })

      // try {
      //   let url: string;
      //   let credentialId;
      //   if (this.qrString.startsWith('http://') || this.qrString.startsWith('https://')) {
      //     url = new URL(this.qrString).pathname;
      //     const part = url.split('/');
      //     credentialId = part[2];
      //     console.log("CredentialId", credentialId);
      //   }

      //   let credential;
      //   if (credentialId) {

      //   } else {
      //     this.loader = false;
      //     this.invalidQRCode = true;
      //     this.restartScanning();
      //   }
      // } catch (error) {
      //   this.loader = false;
      //   this.invalidQRCode = true;

      //   this.restartScanning();
      // }
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
