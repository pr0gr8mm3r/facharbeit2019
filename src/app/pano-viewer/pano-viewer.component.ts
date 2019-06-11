import { Component, OnInit } from '@angular/core';
import { UIStateService } from '../providers/uistate.service';
import { SterneService } from '../providers/sterne.service';
import { Stern } from '../models/stern';
import { HoursToDeg } from '../pipes/hoursToDeg.pipe';

declare var pannellum: any;

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  viewer = null

  aktiverSternHotspotId = "aktiverStern"

  constructor(public uiState: UIStateService, private sterneService: SterneService, private hToDegPipe: HoursToDeg) { }

  ngOnInit() {
    this.viewer = pannellum.viewer('pano', {
      "default": {
        "firstScene": "basemap"
      },

      "scenes": {
        "basemap": {
          "type": "multires",
          "multiRes": {
            "basePath": "../../assets/panorama/basemap",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 5208
          }
          /*"type": "equirectangular",
          "panorama": "../../assets/panorama/debug/debug-pano.jpg"*/
        },
        "sternenkartenmap": {
          "type": "multires",
          "multiRes": {
            "basePath": "../../assets/panorama/sternenbildermap",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 5208
          }
        }
      },

      "autoLoad": true,
      "showControls": false
    });

    this.sterneService.aktiverStern.subscribe((data) => {
      this._updateAktiverStern(data)
    })

    this.uiState.map.subscribe((currentMap) => {
      console.log(currentMap)
      this.viewer.loadScene(currentMap, this.viewer.getPitch(), this.viewer.getYaw(), this.viewer.getHfov())
      this._updateAktiverStern(this.sterneService.aktiverStern.getValue(), false)
    })
  }

  _updateAktiverStern(aktiverStern: Stern, focus: Boolean = true) {

    this.viewer.removeHotSpot(this.aktiverSternHotspotId)

    if (aktiverStern != null) {

      const pitch = aktiverStern.DEd
      const yaw = - this.hToDegPipe.transform(aktiverStern.RAh)

      if(focus) this.viewer.lookAt(pitch, yaw)
      this.viewer.addHotSpot({
        "id": this.aktiverSternHotspotId,
        "pitch": pitch,
        "yaw": yaw
      })

    }

  }

}
