import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/types/wheater-data';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent implements OnInit{
  @Input() weatherDataInput!: WeatherData;

  ngOnInit(): void {
    console.log(this.weatherDataInput)
  }
  
}
