import { Component, OnInit } from '@angular/core';
import { UIStateService } from '../providers/uistate.service';
import { SterneService } from '../providers/sterne.service';
import { identifierModuleUrl } from '@angular/compiler';

declare var pannellum: any;

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  constructor(public uiState: UIStateService, private sterneService: SterneService) { }

  ngOnInit() {
    var viewer = pannellum.viewer('pano', {
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
      const id = "aktiverStern"
      viewer.removeHotSpot(id)
      if (data != null) {
        viewer.addHotSpot({
          "id": id,
          "pitch": data.dekl,
          //TODO: Tatsächlicher Yaw, rektaszension in h in grad umwandeln
          "yaw": 0
        })
      }
    })

    this.uiState.map.subscribe((currentMap) => {
      console.log(currentMap)
      viewer.loadScene(currentMap, viewer.getPitch(), viewer.getYaw(), viewer.getHfov())
    })
  }

}
