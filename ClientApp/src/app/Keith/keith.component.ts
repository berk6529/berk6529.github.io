import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'keith',
  templateUrl: './keith.component.html',
  styleUrls: ['./keith.component.css'],

})
export class KeithComponent {

   constructor(private _location: Location) { }


    GoBack() {
      this._location.back();
    }


}
