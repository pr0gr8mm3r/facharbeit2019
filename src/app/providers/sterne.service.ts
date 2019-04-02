import { Injectable } from '@angular/core';

import { Stern } from '../models/stern'

@Injectable()
export class SterneService {

  constructor() { }

  getSterne(): Stern[] {
    let sterne: Stern[] = [
      new Stern("hi"),
      new Stern("huhu")
    ]
    return sterne
  }

  setActiverStern(stern: Stern) {
    //TODO
  }

}