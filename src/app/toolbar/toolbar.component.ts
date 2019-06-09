import { Component, OnInit, Input } from '@angular/core';
import { Stern } from '../models/stern';
import { SterneService } from '../providers/sterne.service';
import { UIStateService } from '../providers/uistate.service';
import { FormControl } from '@angular/forms';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sterneCtrl = new FormControl();

  sterne: Stern[]
  gefilterteSterne: Observable<Stern[]>

  aktiverSternQuery: Observable<String> = new Observable(null)

  constructor(private sterneService: SterneService) {
    this.gefilterteSterne = this.sterneCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => {
          if (this.sterne) {
            if (state != this._filterSterne(state)) {
              return this.sterne.slice()
            }
          }
        })
      );
  }

  ngOnInit() {
    this.sterneService.getSterne().subscribe((data: Stern[]) => {
      this.sterne = data
      console.log(data)
    });
    this.aktiverSternQuery.subscribe((value) => {
      for (var i = 0; i < this.sterne.length; i++) {
        if (value == this.sterne[i].Name) {
          this.sterneService.setAktiverStern(this.sterne[i])

        }
      }

    })

    this.sterneService.getSterne().subscribe((data) => {
      this.sterne = data
    })
  }

  private _filterSterne(value: string): Stern[] {

    const filterValue = value.toLowerCase();

    for (var i = 0; i < this.sterne.length; i++) {
      if (value == this.sterne[i].Name) {
        this.sterneService.setAktiverStern(this.sterne[i])

      }
    }

    return this.sterne.filter(stern => stern.Name.toLowerCase().indexOf(filterValue) === 0);
  }

  setValue(name: String) {
    this.sterneCtrl.setValue(name)
  }

}