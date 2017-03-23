import { Component , OnInit } from '@angular/core';

@Component({
 moduleId: module.id,   // fully resolved filename; defined at module load time
  selector: 'app-scopeOfWork', 
  templateUrl: 'scopeOfWork.component.html',
  styleUrls: ['scopeOfWork.component.css']
})


export class ScopeOfWorkComponent implements OnInit {
  
constructor() { }

  ngOnInit() {
  } 
}
