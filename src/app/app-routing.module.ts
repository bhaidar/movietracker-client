import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultRoute = 'movie-tracker';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: defaultRoute
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
