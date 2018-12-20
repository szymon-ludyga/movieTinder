import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies: any = [];
  ids: string[] = [];

  ngOnInit() {

    this.moviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });

  }

  onAdd(form : NgForm) {
    this.moviesService.addMovie(form.value.searchedMovie);
  }

  onDelete(movieId: string) {
    // this.ids = this.arrayRemove(this.ids, movieId);
    this.moviesService.deleteMovie(movieId);
    // console.log('IDS: ', this.ids);
  }

  arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
  }

}
