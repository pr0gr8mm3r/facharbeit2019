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
    /*pannellum.viewer('pano', {
      "type": "equirectangular",
      "panorama": "../../assets/starmap.jpg",
      "autoLoad": true,
      "showControls": false
    });*/
    pannellum.viewer('pano', {
      "type": "multires",
      "multiRes": {
          "basePath": "../../assets/panorama",
          "path": "/%l/%s%x_%y",
          "fallbackPath": "/fallback/%s",
          "extension": "png",
          "tileResolution": 1024,
          "maxLevel": 0,
          "cubeResolution": 1024
      },
      "autoLoad": true,
      "showControls": false
    });
  }

}