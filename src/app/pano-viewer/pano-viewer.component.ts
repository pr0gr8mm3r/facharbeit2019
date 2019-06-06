import { Component, OnInit } from '@angular/core';
import { UIStateService } from '../providers/uistate.service';
import { SterneService } from '../providers/sterne.service';
import { Stern } from '../models/stern';

declare var pannellum: any;

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  viewer = null

  aktiverSternHotspotId = "aktiverStern"

  constructor(public uiState: UIStateService, private sterneService: SterneService) { }

  ngOnInit() {
    this.viewer = pannellum.viewer('pano', {
      "default": {
        "firstScene": "basemap"
      },

      "scenes": {
        "basemap": {
          "title": "Basemap",
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
        },
        "sternenkartenmap": {
          "title": "Sternenbilderkarte",
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
      this._updateAktiverStern(this.sterneService.aktiverStern.getValue())
    })
  }

  _updateAktiverStern(aktiverStern: Stern) {
    this.viewer.removeHotSpot(this.aktiverSternHotspotId)
    if (aktiverStern != null) {
      this.viewer.addHotSpot({
        "id": this.aktiverSternHotspotId,
        "pitch": aktiverStern.dekl,
        //TODO: Tatsächlicher Yaw, rektaszension in h in grad umwandeln
        "yaw": 0
      })
    }
  }

}
