import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const ENDPOINT = 'https://localhost:5001/WeatherForecast';

type ResultType = {
  date?: string,
  temperatureC?: number,
  temperatureF?: number,
  summary?: string
};

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit {
  results!: ResultType;
  apiCalled: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  callAPI() {

    this.http.get(ENDPOINT)
      .subscribe(results => {
        this.results = results
        this.apiCalled = true;
      },
      err => {
        console.log(err)
      })
  }
}
