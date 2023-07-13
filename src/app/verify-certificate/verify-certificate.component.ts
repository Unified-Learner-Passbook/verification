import { Component, OnInit } from '@angular/core';



import { VerifyService } from 'vc-verification';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
//  const { createCanvas, loadImage } = require('canvas');
//  const { scanImageData } = require('zbar-angular.wasm');

@Component({
  selector: 'app-verify-certificate',
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.scss']
})
export class VerifyCertificateComponent implements OnInit {
  itemData: any;
  constructor(public verifyService: VerifyService) {

  }
  ngOnInit(): void {
    console.log("scanner is running")

    this.itemData =
    {
      "scanner_type": "ZBAR_QRCODE",
      "showResult": [
        { "title": "Name", "path": "credentialSubject.name" },
        { "title": "Gender", "path": "credentialSubject.gender" },
        { "title": "Institute", "path": "credentialSubject.institute" },
        { "title": "AcademicYear", "path": "credentialSubject.academicYear" },
        { "title": "RollNo", "path": "credentialSubject.rollNo" },
      
      ],
      "scanNote": "To verify certificate, simply scan the QR code thats on the document.",
      "certificateTitle": 'Certificate',
      "verify_another_Certificate": 'Verify another Certificate',
      "cetificate_not_valid": 'This Certificate is not valid',
      "scan_qrcode_again": "Please scan QR code again",
      "invalid_qrcode": "This Certificate is not valid",
      "route": "benefit"

    }

    console.log("itemData", this.itemData)

  }

}
