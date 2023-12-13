import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CityWeatherComponent} from "./city-weather/city-weather.component";

export const routes: Routes = [
  {
    path:'', redirectTo:"/home", pathMatch : "full"
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'city/:city', component: CityWeatherComponent
  },
];
