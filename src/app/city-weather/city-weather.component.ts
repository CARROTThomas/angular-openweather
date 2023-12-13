import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Weather} from "../weather";
import {WeatherService} from "../weather.service";
import {OpenWeatherComponent} from "../open-weather/open-weather.component";
import {RouterLink, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-city-weather',
  standalone: true,
  imports: [CommonModule, OpenWeatherComponent, RouterLink],
  templateUrl: './city-weather.component.html',
  styleUrl: './city-weather.component.css'
})
export class CityWeatherComponent {

  @Input() city! : string

  weather: Weather = {name: "", coord: {lat: 0, lon: 0}, main: {temp: 0}, weather: [{description: "", icon: "", main: ""}]}
  weatherService : WeatherService = inject(WeatherService)

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {this.city = params['city'];});

    this.weatherService.getWeatherByCity(this.city)
      .then((weatherFromApi: Weather)=>{this.weather = weatherFromApi})
      //console.log(this.city)
  }
}
