import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getAllRecommendations() {
    return this.http.get('/recommendations').pipe(data => data, error => error);
  }

  updateVotes(vote: number, id: string) {
    return this.http.put('/recommendations', {vote: vote, id: id}, { responseType: 'json' })
    .subscribe(data => data,
    error => {
      console.log(error);
    });
  }

}
