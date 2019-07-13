import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '@bh/movie-tracker';

export interface MovieDialogBoxOptions {
	movie?: Movie;
	action: string;
}

@Component({
	selector: 'app-movie-dialog-box',
	templateUrl: './movie-dialog-box.component.html',
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.mat-dialog-content {
			min-width: 300px;
		}
		.mat-dialog-actions {
			justify-content: flex-end;
		}
		mat-form-field {
  			width: 100%;
		}
		input.ng-touched.ng-invalid {
			border-color: #dc3545;
		}
		input.ng-valid {
			border-color: #28a745;
		}
    `]
})
export class MovieDialogBoxComponent {
	public action: string;
	public movie: Movie;

	constructor(
		public dialogRef: MatDialogRef<MovieDialogBoxComponent>,
		//@Optional() is used to prevent error if no data is passed
		@Optional() @Inject(MAT_DIALOG_DATA) public data: MovieDialogBoxOptions) {
		this.movie = data.movie;
		this.action = data.action;
	}

	doAction() {
		this.dialogRef.close({ type: this.action, payload: this.movie });
	}

	closeDialog() {
		this.dialogRef.close({ type: 'Cancel' });
	}
}