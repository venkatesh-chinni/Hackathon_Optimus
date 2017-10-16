import { Http } from '@angular/http';
import { Component, Inject } from '@angular/core';

@Component({

    selector:'app-display',
    templateUrl:'./display.component.html'
})

export class DisplayComponent{
    public forecasts: WeatherForecast[];
        public baseUrl='http://localhost:5000/api/hackathon';
        constructor(http: Http){
            http.get(this.baseUrl).subscribe(result => {
                this.forecasts = result.json() as WeatherForecast[];
            }, error => console.error(error));
        }
    }
    
    interface WeatherForecast {
        name: string;
        email: string;
        location: string;
        ID: number;
        Score:number
    }
