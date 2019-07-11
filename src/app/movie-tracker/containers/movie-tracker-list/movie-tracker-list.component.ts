import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieTrackerService, Movie } from '../../services/movie-tracker.service';
import { switchMap, take, mergeMap, tap, filter, map } from 'rxjs/operators';
import { MtAction } from '@bh/shared';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogBoxComponent } from '../../components/movie-dialog-box/movie-dialog-box.component';

@Component({
	selector: 'app-movie-tracker-list',
	template: `
		<div class="container">
			<div class="search-bar">
				<app-movie-tracker-search-bar (action)="doAction($event)"></app-movie-tracker-search-bar>
			</div>
			<div class="results">
				<app-movie-tracker-grid [dataSource]="dataSource$ | async" (action)="doAction($event)"></app-movie-tracker-grid>
			</div>
		</div>
	`,
	styles: [`
		.container {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 30px;
		}

		.search-bar {
			margin-bottom: 20px;
		}

	`]
})
export class MovieTrackerListComponent implements OnInit {
	public dataSource$: Observable<Movie[]>;
	private refresh$ = new BehaviorSubject<string>('');

	constructor(private readonly dialog: MatDialog, private readonly movieService: MovieTrackerService) { }

	ngOnInit(): void {
		this.dataSource$ = this.refresh$.pipe(
			switchMap((term: string) => this.movieService.searchMovies(term))
		);
	}

	public doAction({ type, payload }: MtAction): void {
		switch (type) {
			case 'search':
				this.refresh$.next(payload);
				break;
			case 'update':
				this.updateMovie(payload);
				break;
			case 'delete':
				this.deleteMovie(payload);
				break;
			case 'create':
				this.createMovie();
				break;
			default:
				console.log('Unhandled event type!');
		}
	}

	private createMovie(): void {
		const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
			data: { action: 'create', movie: {} }
		});

		dialogRef.afterClosed()
			.pipe(
				filter((result: MtAction) => result && result.type === 'create'),
				map((result: MtAction) => result.payload),
				mergeMap((createdMovie: Movie) => this.movieService.post(createdMovie)),
				take(1)
			)
			.subscribe(() => this.refresh$.next(''));
	}

	private deleteMovie(movie: Movie): void {
		const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
			data: { action: 'delete', movie }
		});

		dialogRef.afterClosed()
			.pipe(
				filter((result: MtAction) => result && result.type === 'delete'),
				mergeMap(() => this.movieService.delete(movie.id)),
				take(1)
			)
			.subscribe(() => this.refresh$.next(''));
	}

	private updateMovie(movie: Movie): void {
		const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
			data: { action: 'edit', movie }
		});

		dialogRef.afterClosed()
			.pipe(
				filter((result: MtAction) => result && result.type === 'edit'),
				map((result: MtAction) => result.payload),
				mergeMap((updatedMovie: Movie) => this.movieService.put(updatedMovie.id, updatedMovie)),
				take(1)
			)
			.subscribe(() => this.refresh$.next(''));
	}
}