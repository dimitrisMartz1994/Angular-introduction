import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Dimitris";

  person0 = {
      givenName : "George",
      surName : "Martz",
      age : 0x20,
      email : "mhtsaras@aueb.gr",
      address: "Athens"
    }

  person1 = {
    givenName : "Nektarios",
    surName : "Martz",
    age : 0x20,
    email : "mhtsaras@aueb.gr",
    address: "Athens"
  }
  
}
