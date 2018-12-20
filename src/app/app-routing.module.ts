import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { MoviesComponent } from './movies/movies.component';

const routes : Routes = [

    {
      path: '', 
      redirectTo: 'recommendations',
      pathMatch: 'full'
    },
    {
      path: 'recommendations', component: RecommendationsComponent
    },
    {
      path: 'movies', component: MoviesComponent
    },
    { 
      path: '**', redirectTo: '/' 
    }
  
  ];

@NgModule({
imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
],
exports: [RouterModule]
})

export class AppRoutingModule { }