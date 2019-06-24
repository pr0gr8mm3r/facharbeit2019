import { Component, OnInit } from '@angular/core';
import { SterneService } from '../providers/sterne.service';
import { Stern } from '../models/stern';
import { Observable } from 'rxjs';
import { HoursToDeg } from '../pipes/hoursToDeg.pipe';
@Component({
  selector: 'app-aktiver-stern',
  templateUrl: './aktiver-stern.component.html',
  styleUrls: ['./aktiver-stern.component.css']
})
export class AktiverSternComponent implements OnInit {

  public aktiverStern: Stern

  constructor(public sterneService: SterneService, public htodeg: HoursToDeg) {}

  ngOnInit() {
    this.sterneService.aktiverStern.subscribe((data) => {
      this.aktiverStern = data
    })
  }

  clearAktiverStern() {
    this.sterneService.aktiverStern.next(null)
  }

}