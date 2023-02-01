import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
})
export class FetchDataComponent {
  nameList!: Array<names>;


  ngOnInit() {

    this.nameList = [
      { FirstName: "Brad", LastName: "Berkobien", JobTitle: "Senior Software Engineer, Production Support", Overview: "I Like to solve things" },
      { FirstName: "Keith", LastName: "Morton", JobTitle: "Software Engineer, Production Support", Overview: "The Man, The Myth, The legend" },
      { FirstName: "Ana", LastName: "Ausek", JobTitle: "Software Engineer", Overview: "Really good developer" },
      { FirstName: "George", LastName: "Fernandez", JobTitle: "Software Engineer", Overview: "Super rad " }
    ]

  }
}

interface names {
  FirstName: string,
  LastName: string,
  JobTitle: string,
  Overview: string
}
