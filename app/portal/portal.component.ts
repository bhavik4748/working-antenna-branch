import { Component , OnInit } from '@angular/core';
import { IPortal } from './portal';
import { PortalService } from './portal.service';

@Component({
 moduleId: module.id,   // fully resolved filename; defined at module load time
  selector: 'app-portal', 
  templateUrl: 'portal.component.html',
  styleUrls: ['portal.component.css'],
  providers:[PortalService]
})


export class PortalComponent implements OnInit {
  
  
  constructor() { 
  
}

  ngOnInit() {
  } 
}
