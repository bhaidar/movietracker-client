import { Component } from '@angular/core';
import { AuthenticationService } from '../app-auth';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main',
	template: `
		<mat-toolbar color="primary">
			<mat-toolbar-row class="fill-remaining-space">
				<span>Movie Tracker Client</span>
					<div>
						<button (click)="logout()" mat-raised-button>Logout</button>
					</div>
			</mat-toolbar-row>
		</mat-toolbar>
		<div class="main-content">
			<router-outlet></router-outlet>
		</div>
	`,
	styles: [`
		.fill-remaining-space {
			display: flex;
			justify-content: space-between;
		}
	`]
})
export class AppMainComponent {
	constructor(private readonly auth: AuthenticationService, private readonly router: Router) { }

	logout(): void {
		this.auth.logout();
		this.router.navigate(['/login']);
	}
}