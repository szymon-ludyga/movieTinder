import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'; 


@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getAllRecommendations(){
    return this.http.get('/recommendations').pipe((recommendations) => {
      return recommendations;
    });
  }
}
