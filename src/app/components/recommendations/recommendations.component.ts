import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../../services/recommendations/recommendations.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Vote } from '../../reducers/vote.model';
import * as VoteActions from '../../reducers/vote.actions';


interface AppState {
  vote: Vote;
}

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html'
})
export class RecommendationsComponent implements OnInit {
  vote: Observable<Vote>;
  isLoading = false;
  isSwiped = true;
  voteCount = 0;
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
    if (this.movies.length > 0) {
      this.store.dispatch(new VoteActions.ChangeMovie(
        this.movies[0].title,
        this.movies[0].img_url,
        this.movies[0].rating,
        this.movies[0].summary));
    }
    this.isLoading = false;
  }

  getNextMovie() {

    this.store.dispatch(new VoteActions.ChangeMovie(
      this.movies[0].title,
      this.movies[0].img_url,
      this.movies[0].rating,
      this.movies[0].summary));
    this.isLoading = false;
  }

  onAccept() {

    this.isLoading = true;
    this.voteCount = 1;
    this.recommendationsService.updateVotes(this.voteCount, this.movies[0]._id);
    this.movies.shift();
    if (this.movies.length > 0) {
      this.getNextMovie();
    } else {
      this.getMovies();
    }

  }

  onReject() {

    this.isLoading = true;
    this.voteCount = -1;
    this.recommendationsService.updateVotes(this.voteCount, this.movies[0]._id);
    this.movies.shift();
    if (this.movies.length > 0) {
      this.getNextMovie();
    } else {
      this.getMovies();
    }

  }

}
