import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,   // fully resolved filename; defined at module load time
  selector: 'app-status',
  templateUrl: 'appStatus.component.html',
  styleUrls: ['appStatus.component.css']
})


export class AppStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
