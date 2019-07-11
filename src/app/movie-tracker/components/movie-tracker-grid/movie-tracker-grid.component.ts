import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '@bh/movie-tracker';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { MtAction } from '@bh/shared';

@Component({
	selector: 'app-movie-tracker-grid',
	template: `
	<div class="add-row">
		<button mat-raised-button color="primary" (click)="doAction('create')">Add Movie</button>
	</div>
	<ng-container *ngIf="dataSource && dataSource.length > 0; else noDataTemplate">
		<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
			<!-- Title Column -->
			<ng-container matColumnDef="title">
				<th mat-header-cell *matHeaderCellDef> Title </th>
				<td mat-cell *matCellDef="let element"> {{ element.title }} </td>
			</ng-container>

			<!-- WatchOn Column -->
			<ng-container matColumnDef="watchedOn">
				<th mat-header-cell *matHeaderCellDef> Watched On </th>
				<td mat-cell *matCellDef="let element"> {{ element.watchedOn | date:'mediumDate' }} </td>
			</ng-container>

			<!-- Genre Column -->
			<ng-container matColumnDef="genre">
				<th mat-header-cell *matHeaderCellDef> Genre </th>
				<td mat-cell *matCellDef="let element"> {{ element.genre }} </td>
			</ng-container>

			<!-- Rating Column -->
			<ng-container matColumnDef="rating">
				<th mat-header-cell *matHeaderCellDef> Rating </th>
				<td mat-cell *matCellDef="let element"> {{ element.rating }} </td>
			</ng-container>

			<!-- Action Column -->
			<ng-container matColumnDef="action">
			<th mat-header-cell *matHeaderCellDef> Action </th>
			<td mat-cell *matCellDef="let element" class="action-link"> 
				<a (click)="doAction('update',element)">Edit</a> | 
				<a (click)="doAction('delete',element)">Delete</a>  
			</td>
			</ng-container>

			<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
			<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
		</table>
		</ng-container>
		<ng-template #noDataTemplate>
			<p>No records found!</p>
		</ng-template>
	`,
	styles: [`
		table {
  			width: 100%;
		}

		.add-row {
			display: flex;
			justify-content: flex-end;
			margin: 0 0 20px 0;
		}
	`]
})
export class MovieTrackerGridComponent {
	displayedColumns: string[] = ['title', 'watchedOn', 'genre', 'rating', 'action'];
	@Input() dataSource: Movie[];
	@Output() action: EventEmitter<MtAction> = new EventEmitter();

	public doAction(type, payload): void {
		this.action.emit({ type, payload });
	}
}