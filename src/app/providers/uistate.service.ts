import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIStateService {

  map: string = "basemap"

  constructor() { }

  getCurrentMap(): Observable<string> {
    return of(this.map)
  }

  toggleMaps() {
    switch (this.map) {
      case "basemap":
        this.map = "sternenkartenmap"
      default:
        this.map = "basemap"
    }
  }
}
