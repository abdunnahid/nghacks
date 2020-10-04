import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent {

  @Output() ratingChange = new EventEmitter<number>();

  stars: boolean[] = Array(5).fill(false);

  @Input() ratedIcon = 'star';
  @Input() notRatedIcon = 'star_outline';
  @Input() ratedIconColor = '#faca51';
  @Input() animation = true;

  @Input('ratingCount')
  public set setRatingCount(v: number) {
    if (!v) { return; }
    this.stars = Array(parseInt(v as any)).fill(false);
  }

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;

  // Function to call when the rating changes.
  onChange = (rating: number) => {
    this.ratingChange.emit(rating);
  }

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  get value(): number {
    let val = 0;
    for (const star of this.stars) {
      if (star) {
        val++;
      }
    }
    return val;
  }

  rate(rating: number): void {
    if (this.disabled) { return; }
    this.writeValue(rating);
  }


  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(rating: number): void {

    this.stars.forEach((star, index) => {

      if (index < rating) {
        this.stars[index] = true;
      }
      else {
        this.stars[index] = false;
      }

    });

    this.onChange(this.value);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  trackByFn(index: number, item): number {
    return index;
  }

}
