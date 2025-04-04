import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "../shared/api";
import { Observable } from "rxjs";
import { ITour } from "../models/tours";

@Injectable({
    providedIn: 'root'
})

export class ToursService {
    constructor(private http: HttpClient) {}

    getTours(): Observable<any> {
            return this.http.get(API.tours);
        }
    
    getTourById(id: string): Observable<ITour> {
        const path = API.tour+'/'+id;
        return this.http.get<ITour>(`${API.tour}/${id}`)
    }

    getNearestTourByLocationId(id: string): Observable<ITour[]> {
        return this.http.get<ITour[]>(API.nearestTours, {
            params: {locationId: id}
        });
    }

    searchTours(tours: ITour[], value: string): ITour[] {
        if (Array.isArray(tours)) {
            return tours.filter((tour) => {

                if (tour && typeof tour.name === 'string') {
                    return tour.name.toLowerCase().includes(value.toLowerCase());
                } else {
                    return false;
                }
            });
        } else {
            return [];
        }
    }
    
}