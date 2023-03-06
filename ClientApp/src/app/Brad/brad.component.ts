import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'brad',
  templateUrl: './brad.component.html',
  styleUrls: ['./brad.component.css'],

})
export class BradComponent {

   constructor(private _location: Location) { }

   GoBack() {
     this._location.back();
    }
}
