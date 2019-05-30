import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UIStateService {

  public map: BehaviorSubject<string> = new BehaviorSubject("basemap")

  toggleMaps() {
    console.log("toggeling map")
    switch (this.map.getValue()) {
      case "basemap":
        this.map.next("sternenkartenmap")
        break
      default:
        this.map.next("basemap")
    }
  }
}