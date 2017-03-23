import { Component, OnInit } from '@angular/core';
import { PortalService } from '../portal.service'
import { IPortal } from '../portal';

@Component({
  moduleId: module.id,   // fully resolved filename; defined at module load time
  selector: 'app-planWork',
  templateUrl: 'planWork.component.html',
  styleUrls: ['planWork.component.css']
})


export class PlanWorkComponent implements OnInit {
  jobFilingObj: IPortal = {
    "portalId": 1,
    "HouseNo": "280",
    "StreetName": "Broadway",
    "BoroughNYC": "1",
    "Block": 12345,
    "Lot": 5555,
    "Bin": 159,
    "CBNo": "753",
    "Zip": "10007",
    "AptCondonos": "2",
    "WorkonFloors": "3"
  };
  errorMessage: string;


  constructor(private _portalService: PortalService) { }

  ngOnInit(): void {
    this._portalService.getJobFiling()
      .subscribe(
      portal => this.jobFilingObj = portal,
      error => this.errorMessage = <any>error
      );
    console.log(this.jobFilingObj);


    //  this.jobFilingObj = this._portalService.getJobFiling();
    //  console.log(this._portalService.getJobFiling());

  }
}
