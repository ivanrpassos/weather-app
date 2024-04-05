import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY: string = '73adfadb5d44f7e802863627a6050016';

  constructor(private _http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this._http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&unitis=metric&mode=json&APPID=${this.API_KEY}`
    );
  }
}
