import { Injectable } from '@angular/core';

@Injectable()
export class UIStateService {

  public map: string = "basemap"

  toggleMaps() {
    switch (this.map) {
      case "basemap":
        this.map = "sternenkartenmap"
        break
      default:
        this.map = "basemap"
    }
  }
}
