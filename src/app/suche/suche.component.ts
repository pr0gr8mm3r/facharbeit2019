import { Component, OnInit, Input } from '@angular/core';
import { Stern } from '../models/stern';
import { SterneService } from '../providers/sterne.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-suche',
  templateUrl: './suche.component.html',
  styleUrls: ['./suche.component.css']
})
export class SucheComponent implements OnInit {

  sterneCtrl = new FormControl();

  sterne: Stern[]
  gefilterteSterne: Observable<Stern[]>

  constructor(private sterneService: SterneService) {
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