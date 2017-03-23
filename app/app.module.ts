import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortalComponent } from '../app/portal/portal.component';
import { AppStatusComponent } from '../app/portal/appStatus/appStatus.component';
import { PlanWorkComponent } from '../app/portal/planWork/planWork.component';
import { ScopeOfWorkComponent } from '../app/portal/scopeOfWork/scopeOfWork.component';
import { CostAffidavitComponent } from '../app/portal/costAffidavit/costAffidavit.component';
import { StatementAndSignatureComponent } from '../app/portal/statementAndSignature/statementAndSignature.component';

const appRoutes: Routes = [
  // { path: 'portal', component: PortalComponent },
  //{ path: 'app', component: AppComponent , outlet:'r1'},
  { path: 'portal/planWork', component: PlanWorkComponent },
  { path: 'portal/scopeOfWork', component: ScopeOfWorkComponent },
  { path: 'portal/costAffidavit', component: CostAffidavitComponent },
  { path: 'portal/statementAndSignature', component: StatementAndSignatureComponent },
  { path: '', redirectTo: 'portal/planWork', pathMatch: 'full' },
  { path: '**', redirectTo: 'portal/planWork', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, PortalComponent, AppStatusComponent, PlanWorkComponent, ScopeOfWorkComponent, CostAffidavitComponent, StatementAndSignatureComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [PortalComponent]
})

export class AppModule {
}