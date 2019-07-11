/**
 * Base on
 * https://stackblitz.com/edit/angular-material-star-rating-i2f93q
 */

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export enum StarRatingColor {
	primary = "primary",
	accent = "accent",
	warn = "warn"
}

@Component({
	selector: 'mat-star-rating',
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => StarRatingComponent),
			multi: true
		}
	],
})
export class StarRatingComponent implements ControlValueAccessor, OnInit {

	@Input('starCount') starCount: number = 5;
	@Input('color') color: string = StarRatingColor.accent;

	get rating(): number {
		return this._rating;
	}

	set rating(val: number) {
		if (this._rating !== val) {
			this._rating = val;
			this.propagateChange(val);
		}
	}

	private propagateChange: (value: any) => void = () => { };
	private _rating: number;

	public ratingArr: number[] = [];

	ngOnInit() {
		this.ratingArr = Array.from(Array(this.starCount).keys());
	}

	writeValue(value: any) {
		if (value !== this._rating) {
			this.rating = value;
		}
	}

	registerOnChange(fn: (value: any) => void) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: () => void) { }

	onClick($event: MouseEvent, rating: number) {
		$event.stopPropagation();
		$event.preventDefault();

		let ratingToSend = rating;

		if (rating === 1 && this.rating === 1) {
			ratingToSend = 0; // reset rating
		}

		this.writeValue(ratingToSend);
		this.propagateChange(ratingToSend);
	}

	showIcon(index: number) {
		if (this.rating >= index + 1) {
			return 'star';
		} else {
			return 'star_border';
		}
	}
}