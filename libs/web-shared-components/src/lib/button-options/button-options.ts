import { ChangeDetectionStrategy, Component, input, output, signal, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

// Define the type for button options
export type ButtonOption = { value: string | number; label: string };

@Component({
  selector: 'app-button-options',
  styleUrls: ['./button-options.scss'],
  template: `
    <div class="btn-group-custom">
      @for (option of options(); track option.value; let index = $index) {
      <button
        type="button"
        class="btn-option"
        data-value="option.value"
        [class.active]="activeIndex() === index"
        (click)="onValueChanged(option.value, index)"
      >
        {{ option.label }}
      </button>
      }
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonOptions {
  activeIndex = signal(0);
  options = input<ButtonOption[]>();
  formElement = input<FormControl>();
  valueChanged = output<string | number>();

  onValueChanged(value: string | number, index: number) {
    this.activeIndex.set(index);
    this.formElement()?.setValue(value);
    this.valueChanged.emit(value);
  }
}
