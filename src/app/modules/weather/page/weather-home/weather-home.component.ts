import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { WeatherData } from 'src/app/models/types/wheater-data';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  // styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly _subject: Subject<void> = new Subject();

  defaultCityName: string = 'London';
  weatherData!: WeatherData;

  searchIcon = faMagnifyingGlass;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.defaultCityName);
  }

  getWeatherData(cityName: string): void {
    this._weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this._subject))
      .subscribe({
        next: (res) => {
          res && (this.weatherData = res);
          console.log(this.weatherData);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onSubmit() {
    this.getWeatherData(this.defaultCityName);
  }

  ngOnDestroy(): void {
    this._subject.next();
    this._subject.complete();
  }
}
