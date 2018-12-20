import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Vote } from '../reducers/vote.model';
import * as VoteActions from '../reducers/vote.actions';


interface AppState {
  vote: Vote;
}

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  vote: Observable<Vote>;

  isLoading = false;
  voteCount: number = 0;
  movies: any;


  constructor(private recommendationsService: RecommendationsService, private store: Store<AppState>) {
    this.vote = this.store.select('vote');
  }

  ngOnInit() {

    this.isLoading = true;
    this.getMovies();

  }

  async getMovies() {

    this.movies = await this.recommendationsService.getAllRecommendations().toPromise();
    this.store.dispatch(new VoteActions.ChangeMovie(
      this.movies[0].Title, 
      this.movies[0].Poster, 
      this.movies[0].imdbRating, 
      this.movies[0].Plot));
    this.isLoading = false;
    
  }

  getNextMovie() {

    this.store.dispatch(new VoteActions.ChangeMovie(
      this.movies[0].Title, 
      this.movies[0].Poster, 
      this.movies[0].imdbRating, 
      this.movies[0].Plot));
    this.isLoading = false;

  }

  onAccept() {

    this.isLoading = true;
    this.voteCount = 1;
    this.recommendationsService.updateVotes(this.voteCount, this.movies[0]._id);
    this.movies.shift();
    if(this.movies.length > 0)
    {
      this.getNextMovie();
    }
    else
    {
      this.getMovies();
    }

  }

  onReject() {

    this.isLoading = true;
    this.voteCount = -1;
    this.recommendationsService.updateVotes(this.voteCount, this.movies[0]._id);
    this.movies.shift();
    if(this.movies.length > 0)
    {
      this.getNextMovie();
    }
    else
    {
      this.getMovies();
    }

  }

}
