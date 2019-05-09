import { Component, OnInit } from '@angular/core';
//import { pannellum } from 'pannellum'
declare var pannellum: any;

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    pannellum.viewer('pano', {
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
          },
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 0,
              "type": "scene",
              "text": "Sternenkartemap",
              "sceneId": "sternenkartemap"
            }
          ]
        },

        "sternenkartemap": {
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
  }

}
