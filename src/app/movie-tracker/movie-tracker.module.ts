import { NgModule } from '@angular/core';

import { MovieTrackerGridComponent } from './components/movie-tracker-grid/movie-tracker-grid.component';
import { MovieTrackerListComponent } from './containers/movie-tracker-list/movie-tracker-list.component';
import { MovieTrackerSearchBarComponent } from './components/movie-tracker-search-bar/movie-tracker-search-bar.component';
import { MovieDialogBoxComponent } from './components/movie-dialog-box/movie-dialog-box.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AppSharedModule } from '../shared/app-shared.module';


@NgModule({
  declarations: [
    MovieTrackerGridComponent,
    MovieTrackerListComponent,
    MovieTrackerSearchBarComponent,
    MovieDialogBoxComponent,
    StarRatingComponent
  ],
  imports: [
    AppSharedModule
  ],
  exports: [
    MovieTrackerListComponent,
    MovieTrackerGridComponent,
    MovieTrackerSearchBarComponent,
    MovieDialogBoxComponent
  ],
  entryComponents: [MovieDialogBoxComponent]
})
export class MovieTrackerModule { }
