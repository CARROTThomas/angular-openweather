import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Weather} from "../weather";

@Component({
  selector: 'app-open-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-weather.component.html',
  styleUrl: './open-weather.component.css'
})
export class OpenWeatherComponent {
  @Input() weather! : Weather
}
