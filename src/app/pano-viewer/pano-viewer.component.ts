import { Component, OnInit } from '@angular/core';
import { pannellum } from 'pannellum'

@Component({
  selector: 'app-pano-viewer',
  templateUrl: './pano-viewer.component.html',
  styleUrls: ['./pano-viewer.component.css']
})
export class PanoViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    pannellum.viewer('app-pano-viewer', {
      "type": "equirectangular",
      "panorama": "https://pannellum.org/images/alma.jpg"
    });
  }

}