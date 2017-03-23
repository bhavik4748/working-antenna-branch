import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashBoardComponent } from '../app/dashBoard/dashBoard.component';
import { PortalComponent } from '../app/portal/portal.component';
import { AppStatusComponent } from '../app/portal/appStatus/appStatus.component';
import { PlanWorkComponent } from '../app/portal/planWork/planWork.component';
import { ScopeOfWorkComponent } from '../app/portal/scopeOfWork/scopeOfWork.component';
import { CostAffidavitComponent } from '../app/portal/costAffidavit/costAffidavit.component';
import { StatementAndSignatureComponent } from '../app/portal/statementAndSignature/statementAndSignature.component';


const appRoutes: Routes = [
  // { path: 'portal', component: PortalComponent },
  //{ path: 'app', component: AppComponent , outlet:'r1'},
  { path: 'dashBoard', component: DashBoardComponent },
  {
    path: 'portal', component: PortalComponent, children: [
      { path: '', redirectTo: 'planWork', pathMatch: 'full' },
      { path: 'planWork', component: PlanWorkComponent },
      { path: 'scopeOfWork', component: ScopeOfWorkComponent },
      { path: 'costAffidavit', component: CostAffidavitComponent },
      { path: 'statementAndSignature', component: StatementAndSignatureComponent }
    ]
  },
  { path: '', redirectTo: 'dashBoard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashBoard', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, DashBoardComponent, PortalComponent, AppStatusComponent, PlanWorkComponent, ScopeOfWorkComponent, CostAffidavitComponent, StatementAndSignatureComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}