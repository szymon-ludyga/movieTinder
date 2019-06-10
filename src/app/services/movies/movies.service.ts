import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from "../../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllMovies() {
    return this.http.get(BACKEND_URL + '/movies').pipe(movies => movies);
  }

  addMovie(movieTitle: string) {
    return this.http.post(BACKEND_URL + '/movies', {title: movieTitle}, { responseType: 'json' })
    .pipe()
    .subscribe(data => this.router.navigate(['../success']), error => console.log(error));
  }

  deleteMovie(movieId: string) {
    return this.http.delete(BACKEND_URL + '/movies/' + movieId, { responseType: 'json' })
    .subscribe(data => this.router.navigate(['../success']),
    error => {
      console.log(error);
    });
  }

}
