import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [WeatherComponent]


})
export class AppComponent { }
