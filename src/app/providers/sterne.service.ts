import { Injectable } from '@angular/core';

import { Stern } from '../models/stern'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SterneService {
  
  public aktiverStern: BehaviorSubject<Stern> = new BehaviorSubject(null)

  getSterne(): Stern[] {
    let sterne: Stern[] = [
      new Stern("hi", 1, 2),
      new Stern("huhu", 2, 3)
    ]
    return sterne
  }

  setAktiverStern(stern: Stern) {
    this.aktiverStern.next(stern)
  }

}