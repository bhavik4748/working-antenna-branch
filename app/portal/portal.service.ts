import { Injectable } from '@angular/core';
import { IPortal } from './portal';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class PortalService {

  private _getJobFilingURL = 'http://msdwva-dobcrm03.buildings.nycnet:8085/wrapper/wrapperservice.svc/GetJobFiling/b3af792a-c109-e711-810c-005056ab45d6';

  constructor(private _http: Http) { }

  getJobFiling(): Observable<IPortal> {
    return this._http.get(this._getJobFilingURL)
      .map((response: Response) => <IPortal>response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      ._catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }
}