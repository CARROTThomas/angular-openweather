import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WeatherService} from "../weather.service";
import {OpenWeatherComponent} from "../open-weather/open-weather.component";
import {Router} from "@angular/router"
import {Weather} from "../weather";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OpenWeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  //weather: Weather = {name: "", coord: {lat: 0, lon: 0}, main: {temp: 0}, weather: [{description: "", icon: "", main: ""}]}
  //weatherService: WeatherService = inject(WeatherService)

  form = new FormGroup({
    city: new FormControl('')
  })

  submit(){
    //this.weatherService.getWeatherByCity(this.form.value.city ?? '')       // .fetch(this.form.value.city ?? '').then((weatherFromApi: Weather)=>{this.weather = weatherFromApi}).then(r => this.form.reset())       // reset formulaire
    this.router.navigate(['/city', this.form.value.city ?? ''])
    //console.log(this.form.value.city ?? '')
    this.form.reset({city: ''})
  }
}
