import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,   // fully resolved filename; defined at module load time
    selector: 'app-dashBoardComponent',
    templateUrl: 'dashBoard.component.html',
    styleUrls: ['dashBoard.component.css']
})


export class DashBoardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
