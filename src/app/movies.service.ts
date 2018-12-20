import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllMovies()
  {
    return this.http.get('/movies').pipe(movies => movies);
  }

  addMovie(movieTitle)
  {
    return this.http.post<any>('/movies', {title: movieTitle}, { responseType: 'json' })
    .pipe()
    .subscribe(movie => this.router.navigate(['../recommendations']), error => console.log(error));
  }

  deleteMovie(movieId) 
  {
    return this.http.delete('/movies/' + movieId, { responseType: 'json' }).subscribe(data => {
      console.log(data);
      // window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

}
