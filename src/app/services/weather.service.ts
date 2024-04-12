import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { credentials } from '../models/credentials.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(credentials.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(credentials.XRapidAPIKeyHeader, credentials.XRapidAPIKeyValue)
        .set(credentials.XRapidAPIHostHeader, credentials.XRapidAPIHostValue), 
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}