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
      "type": "equirectangular",
      "panorama": "../../assets/starmap.jpg",
      "autoLoad": true,
      "showControls": false
    });
  }

}