import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  verification : any[];
  verificationStatus: string = 'availedBenefit';

  constructor() { }

  ngOnInit(): void {
    this.verification = [
      {
        "title": "Student grade between grade 1-5"
      },
      {
        "title": "Student home state is UP"
      },
      {
        "title": "Student Nipun status"
      }
  ]
  }

}
