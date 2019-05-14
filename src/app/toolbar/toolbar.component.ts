import { Component, OnInit, Input } from '@angular/core';
import { Stern } from '../models/stern';
import { SterneService } from '../providers/sterne.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UIStateService } from '../providers/uistate.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sterneCtrl = new FormControl();

  sterne: Stern[]
  gefilterteSterne: Observable<Stern[]>

  currentMap: Observable<string>

  constructor(private sterneService: SterneService, private uiState: UIStateService) {
    this.gefilterteSterne = this.sterneCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterSterne(state) : this.sterne.slice())
      );
  }

  ngOnInit() {
    this.sterne = [
      new Stern("Alpha Centauri"),
      new Stern("Sirius")
    ]

    this.currentMap = this.uiState.getCurrentMap()
  }

  private _filterSterne(value: string): Stern[] {
    const filterValue = value.toLowerCase();

    return this.sterne.filter(stern => stern.name.toLowerCase().indexOf(filterValue) === 0);
  }

  setValue(name: String) {
    console.log(name)
    this.sterneCtrl.setValue(name)
  }

}