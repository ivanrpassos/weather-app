import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/types/wheater-data';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  // styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  readonly defaultCityName: string = 'London';

  weatherData!: WeatherData;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.defaultCityName);
  }

  ngOnDestroy(): void {}

  getWeatherData(cityName: string): void {
    this._weatherService.getWeatherData(cityName).subscribe({
      next: (res) => {
        res && (this.weatherData = res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
