import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { MoviesComponent } from './components/movies/movies.component';

import { RecommendationsService } from './services/recommendations/recommendations.service';
import { MoviesService } from './services/movies/movies.service';

import { voteReducer } from './reducers/vote.reducer';
import { SuccessComponent } from './components/success/success.component';
import { SuccessService } from './services/success/success.service';


@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    MoviesComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({ vote: voteReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [RecommendationsService, MoviesService, SuccessService],
  bootstrap: [AppComponent],
  entryComponents:
  [
    RecommendationsComponent,
    MoviesComponent,
    SuccessComponent
  ]
})

export class AppModule { }
