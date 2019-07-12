import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { MtAction } from '@bh/shared';

@Component({
	selector: 'app-movie-tracker-search-bar',
	template: `
		<div class="type-icon">
			<i class="material-icons">search</i>
		</div>
		<input
			type="text"
			#searchInputEl
			placeholder="Search"
		/>
		<div [hidden]="!searchInputEl.value" class="reset-icon" (click)="reset()">
			<i class="material-icons">clear</i>
		</div>
	`,
	styleUrls: ['./movie-tracker-search-bar.component.scss']
})
export class MovieTrackerSearchBarComponent implements OnInit, OnDestroy {
	private searchInput: HTMLInputElement;
	private onDestroy$ = new Subject();

	@ViewChild('searchInputEl', { static: true }) searchInputEl: ElementRef<HTMLInputElement>;

	@Output() public action: EventEmitter<MtAction> = new EventEmitter();

	ngOnInit(): void {
		this.searchInput = this.searchInputEl.nativeElement;

		fromEvent(this.searchInput, 'keyup')
			.pipe(
				tap((event: any) => {
					if (event.key === 'Escape') {
						this.searchInput.value = '';
					}
				}),
				map(() => this.searchInput.value),
				debounceTime(300),
				distinctUntilChanged(),
				takeUntil(this.onDestroy$)
			)
			.subscribe(event => this.action.emit({ type: 'search', payload: event }));
	}

	ngOnDestroy(): void {
		this.onDestroy$.next();
	}

	public reset(): void {
		this.searchInput.value = '';
	}
}