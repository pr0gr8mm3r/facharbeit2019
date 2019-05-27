import { Component, OnInit } from '@angular/core';
import { UIStateService } from '../providers/uistate.service';

declare var pannellum: any;

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  constructor(public uiState: UIStateService) { }

  ngOnInit() {
    /*pannellum.viewer('basemap', {
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

        "sternenbildermap": {
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
    */
    this.uiState.toggleMaps()
  }

}
