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

  constructor(private sterneService: SterneService, public uiState: UIStateService) {
    this.gefilterteSterne = this.sterneCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => {
          if (this.sterne) {
            var filteredSterne = this._filterSterne(state)
            if (state != filteredSterne) {
              return this.sterne.slice()
            } else {
              return filteredSterne
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
  }

  private _filterSterne(value: string): Stern[] {

    const filterValue = value.toLowerCase();

    console.log(value.length)

    if (value.length > 2) {
      console.log("searching...")
      for (var i = 0; i < this.sterne.length; i++) {
        if (value == this.sterne[i].Name) {
          this.sterneService.setAktiverStern(this.sterne[i])

        }
      }
      return this.sterne.filter(stern => stern.Name.toLowerCase().indexOf(filterValue) === 0)
    } else {
      console.log("too little input to search")
      return []
    }
  }

  setValue(name: String) {
    this.sterneCtrl.setValue(name)
  }

}