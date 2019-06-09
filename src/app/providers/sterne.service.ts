import { Injectable } from '@angular/core';

import { Stern } from '../models/stern'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SterneService {
  
  public aktiverStern: BehaviorSubject<Stern> = new BehaviorSubject(null)

  getSterne(): Stern[] {
    let sterne: Stern[] = [
      new Stern("Polaris", 2.530194444, 89.26416667),
      new Stern("Alpha Centauri", 14.65997222, -60.83527778),
      new Stern("Sirius", 6.752472222, -16.71611111)
    ]
    return sterne
  }

  setAktiverStern(stern: Stern) {
    this.aktiverStern.next(stern)
  }

}