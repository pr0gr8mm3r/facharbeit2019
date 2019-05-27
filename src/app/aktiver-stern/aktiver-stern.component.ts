import { Component, OnInit } from '@angular/core';
import { SterneService } from '../providers/sterne.service';
import { Stern } from '../models/stern';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-aktiver-stern',
  templateUrl: './aktiver-stern.component.html',
  styleUrls: ['./aktiver-stern.component.css']
})
export class AktiverSternComponent implements OnInit {

  constructor(public sterneService: SterneService) {}

  ngOnInit() {
  }

  clearAktiverStern() {
    //TODO
  }

}