import { Injectable } from '@angular/core';

import { Stern } from '../models/stern'
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SterneService {
  aktiverStern: BehaviorSubject<Stern>

  constructor(private http: HttpClient) {
    this.aktiverStern = new BehaviorSubject(null)
  }

  getSterne(): Observable<Stern[]> {
     
     return this.http.get<Stern[]>("assets/sterne.json")
   
  }

  setAktiverStern(stern: Stern) {
    this.aktiverStern.next(stern)
  }

}