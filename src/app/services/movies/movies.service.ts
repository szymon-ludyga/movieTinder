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

  addMovie(movieTitle: string)
  {
    return this.http.post('/movies', {title: movieTitle}, { responseType: 'json' })
    .pipe()
    .subscribe(data => this.router.navigate(['../success']), error => console.log(error));
  }

  deleteMovie(movieId: string) 
  {
    return this.http.delete('/movies/' + movieId, { responseType: 'json' }).subscribe(data => 
      this.router.navigate(['../success']),
    error => {
      console.log(error);
    });
  }

}
