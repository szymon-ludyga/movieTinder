import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecommendationsComponent } from './recommendations/recommendations.component';
import { MoviesComponent } from './movies/movies.component';

import { RecommendationsService } from './recommendations.service';
import { MoviesService } from './movies.service';

import { voteReducer } from './reducers/vote.reducer';


@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ vote: voteReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [RecommendationsService, MoviesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
