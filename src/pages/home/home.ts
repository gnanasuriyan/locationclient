import { Component } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	location:any = {};

	baseUrl = 'http://localhost:3000/';

	constructor(public http: Http) {

	}

	public saveLocation() {
		this.http.post(this.baseUrl + 'api/location', 
			JSON.stringify({lat: this.location.lat, lang: this.location.lang}), 
			this.getRequestOptions()).subscribe(response => {
			
			var data = response.json();
			alert(data.message);
			
		}, error => {
			alert('Something went wrong');
		});
	}

	getRequestOptions(): RequestOptions{
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return new RequestOptions({ headers: headers });
	}
}
