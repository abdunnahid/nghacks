import { Component, EventEmitter, forwardRef, Input, OnDestroy, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityInputComponent),
      multi: true
    }
  ]
})
export class QuantityInputComponent implements ControlValueAccessor, OnDestroy {

  quantityCtrl = new FormControl(1);

  @Input() color: string;

  limit = 10000000;
  @Input('limit')
  private set limitValue(v: string) {
    if (!v) { return; }
    this.limit = parseInt(v);
  }

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  disabled = false;
  @Input('disabled')
  private set disabledValue(v: boolean) {
    if (!v) { return; }
    this.quantityCtrl.disable();
    this.disabled = v;
  }

  private _unsubscribeAll: Subject<any> = new Subject();

  @Output() quantityChange = new EventEmitter<number>();

  // Function to call when the quantity changes.
  onChange = (quantity: number) => {
    this.quantityChange.emit(quantity);
  }

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };
  get value(): number {
    return this.quantityCtrl.value;
  }

  constructor() {
    this.quantityCtrl.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((val) => {
        if (this.quantityCtrl.value < 1) {
          this.writeValue(1);
        }
        else if (this.quantityCtrl.value > this.limit) {
          this.writeValue(this.limit);
        }
        else {
          this.writeValue(this.quantityCtrl.value);
        }
      });
  }

  increase(): void {
    if (!this.disabled) {
      this.quantityCtrl.setValue((this.quantityCtrl.value + 1));
    }
  }

  decrease(): void {
    if (!this.disabled) {
      this.quantityCtrl.setValue((this.quantityCtrl.value - 1));
    }
  }

  // Allows Angular to update the model (quantity).
  // Update the model and changes needed for the view here.
  writeValue(quantity: number): void {
    this.quantityCtrl.setValue(quantity, { emitEvent: false });
    this.onChange(this.value);
  }

  // Allows Angular to register a function to call when the model (quantity) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (quantity: number) => void): void {
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
    if (isDisabled) {
      this.quantityCtrl.disable();
    }
    else {
      this.quantityCtrl.enable();
    }
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
