import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieTrackerModule } from './movie-tracker';
import { AppAuthModule } from './app-auth/app-auth.module';
import { AppSharedModule } from './shared/app-shared.module';
import { jwtInterceptorProvider, errorInterceptorProvider } from './app-auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppSharedModule,
    AppRoutingModule,
    AppAuthModule,
    MovieTrackerModule
  ],
  providers: [
    jwtInterceptorProvider,
    errorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
