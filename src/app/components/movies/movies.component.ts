import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies/movies.service";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private moviesService: MoviesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  onAdd(form: NgForm) {
    this.moviesService.addMovie(form.value.searchedMovie);
  }

  onDelete(movieId: string) {
    this.moviesService.deleteMovie(movieId);
  }
}
