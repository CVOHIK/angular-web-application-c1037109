import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private APPID: string;
  private API_URL: string;

  constructor(private http: Http) {
    this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
    this.API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }
  
  cityName='';
  cityNames='';
  cityWeather='';
  cityTemp='';
  
  searchCity(){
     this.http.get(this.API_URL + this.cityName +'&APPID=' + this.APPID + '&units=metric')
     .subscribe(
      (res: Response) =>{
      const weatherCity = res.json();
      console.log(weatherCity);
      this.cityNames = weatherCity.name;
      this.cityWeather = weatherCity.weather[0].description
      this.cityTemp = weatherCity.main.temp +" °C";
      
      }
    )
  }
  delete(){
    this.cityName= "", this.cityNames="", this.cityWeather="", this.cityTemp="";
  }
 
}
