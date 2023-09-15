import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators' //For error handling

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api_key = '65bad866b17b2fc8073ff87376350c1c';
  private api_url = `https://api.openweathermap.org/data/2.5/`

  constructor(private http: HttpClient) { }

  //Method for today's weather forecast
  getWheatherForEnschede(): Observable<any> {
    const city = 'Enschede,nl'; //Use for location
    const units = 'metric'; //Use for units metric/imperial

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${this.api_key}`

    return this.http.get(url).pipe(
      catchError((error: any) => {
        //Print error
        console.error('Error getting the data:', error);
        return [];
      })
    );
  }

  // Method for tomorrow's weather forecast
  getTomorrowForecast(): Observable<any> {
    const city = 'Enschede,nl';
    const units = 'metric';

    // Calculate the date for tomorrow
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const formattedDate = tomorrowDate.toISOString().split('T')[0];

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${this.api_key}`;

    return this.http.get(url);
  }

  
  //Method for the day after tomorrow's weather forecast
  getDayAfterTomorrowForecast(): Observable<any> {
    const city = 'Enschede,nl';
    const units = 'metric';

    // Calculate the date for the day after tomorrow
    const dayAfterTomorrowDate = new Date();
    dayAfterTomorrowDate.setDate(dayAfterTomorrowDate.getDate() + 2);

    const formattedDate = dayAfterTomorrowDate.toISOString().split('T')[0];

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&dt=${formattedDate}&appid=${this.api_key}`;

    return this.http.get(url);
  }
}