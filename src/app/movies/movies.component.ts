import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

    this.moviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });

  }

  onAdd(form : NgForm) {
    this.moviesService.addMovie(form.value.searchedMovie);
  }

  onDelete(movieId) {
    this.moviesService.deleteMovie(movieId);
  }

}
