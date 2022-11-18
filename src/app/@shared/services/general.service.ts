import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private _requestService: RequestService
  ) { }

  getTopStories (): Observable<any> {
    return this._requestService.get('v0/topstories.json');
  }

  getStoryItems (id: number): Observable<any> {
    return this._requestService.get('v0/item/' + id + '.json');
  }

  getUser (id: string): Observable<any> {
    return this._requestService.get('v0/user/' + id + '.json');
  }
}
