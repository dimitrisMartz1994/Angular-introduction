import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Dimitris";

  person= {
    givenName : "Dimitris",
    surName : "Martz",
    age : 0x20,
    email : "mhtsaras@aueb.gr"
  }
}
