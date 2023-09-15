import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  weatherData: any;

  //Forecast properties
  tomorrowForecast: any;
  dayAfterTomorrowForecast: any;

  weatherApiUrl: string = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private weatherService: WeatherService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getWheatherForEnschede().subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        return throwError('An error occurred while fetching weather data.');
      }
    );
  }

  fetchTomorrowForecast() {
    console.log('Fetching tomorrow weather data...');
    this.weatherService.getTomorrowForecast().subscribe(
      (data) => {
        this.tomorrowForecast = data;
        console.log('Tomorrow Forecast data:', this.tomorrowForecast);
      },
      (error) => {
        console.error('Error fetching tomorrow forecast:', error);
      }
    );
  }

  fetchDayAfterTomorrowForecast() {
    console.log('Fetching day after tomorrow forecast...');
    this.weatherService.getDayAfterTomorrowForecast().subscribe((data) => {
      this.dayAfterTomorrowForecast = data;
    });
  }
}
