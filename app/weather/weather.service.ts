import { Injectable} from '@angular/core';
import{ Http } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
	// private _url: string = 'https://jsonplaceholder.typicode.com/posts';
	private _url: string = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
	// private data: Observable <string[]>;
	constructor(private _http: Http) {}


	search(term: string){

		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+term+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
		
		return this._http.get( url )
							.map( res => res.json());
		
	}
}