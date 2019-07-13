import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-auth/auth.guard';
import { LoginComponent } from './shared/login.component';
import { AppMainComponent } from './shared/app-main.component';
import { MovieTrackerListComponent } from './movie-tracker/containers/movie-tracker-list/movie-tracker-list.component';

const defaultRoute = 'admin/movie-tracker';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: defaultRoute
},
{
  path: 'admin',
  component: AppMainComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'movie-tracker',
    component: MovieTrackerListComponent,
  }]
},
{
  path: 'login',
  component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
