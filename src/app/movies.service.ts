import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies()
  {
    return this.http.get('/movies').pipe((movies) => {
      return movies;
    });
  }

  addMovie(movieTitle)
  {
    // console.log(movieTitle)
    return this.http.post<any>('/movies', {title: movieTitle}, { responseType: 'json' })
    .subscribe(data => {
        console.log(data);
        window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

  deleteMovie(movieId) 
  {
    return this.http.delete('/movies/' + movieId).subscribe(data => {
      console.log(data);
      // window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

}
