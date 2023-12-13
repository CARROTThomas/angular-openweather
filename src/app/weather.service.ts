import { Injectable } from '@angular/core';
import {Weather} from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  // fetch weather Lyon
  async getWeather() {

    let weather: Weather

    let weatherJson = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&APPID=8eacc0b514c2b80c5db91cc59dfd70ff")
    weather = await weatherJson.json()
    console.log(weather)

    return weather
  }

  // fetch by city
  async getWeatherByCity(city: string) {

    let weatherByCity: Weather
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=8eacc0b514c2b80c5db91cc59dfd70ff`
    let weatherJson = await fetch(url)

    weatherByCity = await weatherJson.json()
    console.log(weatherByCity)
    console.log(url)

    return weatherByCity
  }
}
