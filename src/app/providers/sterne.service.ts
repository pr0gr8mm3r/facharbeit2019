import { Injectable } from '@angular/core';

import { Stern } from '../models/stern'
import { Observable, of, Subscriber } from 'rxjs';

@Injectable()
export class SterneService {

  aktiverStern: Observable<Stern>
  aktiverSternSubscriber

  constructor() {
    this.aktiverStern = new Observable((subscriber)=>{
      this.aktiverSternSubscriber = subscriber
      console.log(subscriber)
    })
  }

  getSterne(): Stern[] {
    let sterne: Stern[] = [
      new Stern("hi", 1, 2),
      new Stern("huhu", 2, 3)
    ]
    return sterne
  }

 setAktiverStern(stern: Stern) {

    this.aktiverSternSubscriber.next(stern)

  }

}