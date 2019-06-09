import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from './material.module';
import { MatIconRegistry } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { SterneService } from './providers/sterne.service';
import { UIStateService } from './providers/uistate.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AktiverSternComponent } from './aktiver-stern/aktiver-stern.component';
import { PanoViewerComponent } from './pano-viewer/pano-viewer.component';
import { HoursToDeg } from './pipes/hoursToDeg.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule, MaterialModule, FlexLayoutModule ],
  declarations: [ AppComponent, SidebarComponent, ToolbarComponent, AktiverSternComponent, PanoViewerComponent, HoursToDeg ],
  bootstrap:    [ AppComponent ],
  providers:    [ SterneService, UIStateService, MatIconRegistry, HoursToDeg ]
})
export class AppModule { }
