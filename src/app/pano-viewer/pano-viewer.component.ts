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
      "type": "multires",
      "multiRes": {
          "basePath": "../../assets/panorama",
          "path": "/%l/%s%y_%x",
          "fallbackPath": "/fallback/%s",
          "extension": "jpg",
          "tileResolution": 512,
          "maxLevel": 5,
          "cubeResolution": 5208
      },
      "autoLoad": true,
      "showControls": false
    });
  }

}