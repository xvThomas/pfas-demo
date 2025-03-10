import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pfas-demo';

  constructor() {
    console.log("new app component");
  }
}
