import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { Review } from "../models/review";

@Injectable()
export class ReviewApiService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<Review[]>  {
        const reviews = this.http.get<Review[]>("http://localhost:3000/reviews")
        
        return reviews
    }
}

