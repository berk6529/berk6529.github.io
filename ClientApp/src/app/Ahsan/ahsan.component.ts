import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ahsan',
  templateUrl: './ahsan.component.html',
  styleUrls: ['./ahsan.component.css'],

})
export class AhsanComponent {

   constructor(private _location: Location) { }

   GoBack() {
     this._location.back();
    }
}
