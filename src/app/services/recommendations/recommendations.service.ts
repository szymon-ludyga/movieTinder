import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getAllRecommendations() {
    return this.http.get(BACKEND_URL + '/recommendations').pipe(data => data, error => error);
  }

  updateVotes(vote: number, id: string) {
    return this.http.put(BACKEND_URL + '/recommendations', {vote: vote, id: id}, { responseType: 'json' })
    .subscribe(data => data,
    error => {
      console.log(error);
    });
  }

}
