import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getAllRecommendations(){
    return this.http.get('/recommendations').pipe(res => res, error => error);
  }

  updateVotes(vote, id) {
    return this.http.put<any>('/recommendations', {vote: vote, id: id}, { responseType: 'json' })
    .subscribe(data => {
        console.log(data);
    },
    error => {
      console.log(error);
    });
  }

}
