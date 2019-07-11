import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieTrackerRoutingModule } from './movie-tracker-routing.module';
import { MovieTrackerGridComponent } from './components/movie-tracker-grid/movie-tracker-grid.component';
import { MovieTrackerListComponent } from './containers/movie-tracker-list/movie-tracker-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { MovieTrackerSearchBarComponent } from './components/movie-tracker-search-bar/movie-tracker-search-bar.component';
import { MovieDialogBoxComponent } from './components/movie-dialog-box/movie-dialog-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    MovieTrackerGridComponent,
    MovieTrackerListComponent,
    MovieTrackerSearchBarComponent,
    MovieDialogBoxComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MovieTrackerRoutingModule
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
