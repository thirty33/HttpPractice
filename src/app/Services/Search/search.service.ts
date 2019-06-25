import { Injectable } from "@angular/core";
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Injectable({ 
    providedIn: 'root',
})

export class SearchService {
    apiRoot:string = 'http://localhost:80/second_api_yii2_practice/web/country/get-countries';
    results:Object[];
    loading:boolean;

    constructor(private http: HttpClient) {
        this.results = [];
        this.loading = false;
    }

    search() {
        console.log('is entering in this fucntion');
        return this.http.get<Object[]>(this.apiRoot);
    }

    searchTwo() : Observable<HttpResponse<Object[]>> {
        return this.http.get<Object[]> (
            this.apiRoot, { observe : 'response'}
        );
    }
}