import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators' //For error handling

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api_key = '65bad866b17b2fc8073ff87376350c1c';
  private api_url = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWheatherForEnschede(): Observable<any> {
    const city = 'Enschede,nl'; //Use for location
    const units = 'metric'; //Use for units metric/imperial

    const url = `${this.api_url}?q=${city}&units=${units}&appid=${this.api_key}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        return response.weatherData;
      }),
      catchError((error: any) => {
        //Print error
        console.error('Error getting the data:', error);
        return [];
      })
    );
  }
}
