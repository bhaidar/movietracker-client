import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieTrackerListComponent } from './containers/movie-tracker-list/movie-tracker-list.component';


const routes: Routes = [
  {
    path: 'movie-tracker',
    component: MovieTrackerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieTrackerRoutingModule { }
