import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SuccessComponent } from './components/success/success.component';

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
    // { 
    //   path: '**', redirectTo: 'recommendations' 
    // },
    { 
      path: 'success', component: SuccessComponent
    }
  
  ];

@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [RouterModule]
})

export class AppRoutingModule { }