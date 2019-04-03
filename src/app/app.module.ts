import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SterneService } from './providers/sterne.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SucheComponent } from './suche/suche.component';
import { AktiverSternComponent } from './aktiver-stern/aktiver-stern.component';
import { PanoViewerComponent } from './pano-viewer/pano-viewer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule ],
  declarations: [ AppComponent, SidebarComponent, SucheComponent, AktiverSternComponent, PanoViewerComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ SterneService ]
})
export class AppModule { }
