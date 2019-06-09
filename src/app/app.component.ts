import { Component, OnInit } from '@angular/core';

import { Stern } from './models/stern';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      "sternenbilderkarte",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-sternenbild.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "basemap",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-basemap.svg")
    )
  }
}