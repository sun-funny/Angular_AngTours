import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "../shared/api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ToursService {
    constructor(private http: HttpClient) {}
        getTours(): Observable<any> {
            return this.http.get(API.tours);
        }
    
}