import { ChangeDetectionStrategy, Component, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonOptions } from '@weaify/web-shared-components';
import { UIDataService } from '../../app.data';
import { UserInputContract } from '@weaify/shared-types';
import { DietPlannerStore } from './diet-planner-store';
import { Router } from '@angular/router';

@Component({
  imports: [ButtonOptions, ReactiveFormsModule],
  selector: 'app-diet-planner',
  templateUrl: './diet-planner.html',
  styleUrl: './diet-planner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DietPlanner {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly uiDataService = inject(UIDataService);
  private readonly store = inject(DietPlannerStore);

  constructor() {
    effect(() => {
      if (this.store.planReady()) {
        this.router.navigate(['/diet-plan']);
      }
    });
  }

  /** Units for weight based on user preference */
  weightUnit = signal('lbs');

  /** Units for height based on user preference */
  heightUnit = signal('inches');

  /** UI data for labels and other display information */
  data = this.uiDataService.getUIDataSignal();

  /** Form group for user input in the diet planner */
  dietForm = this.formBuilder.group<UserInputContract>({
    age: 0,
    gender: 'male',
    height: 0,
    weight: 0,
    activityLevel: '',
    goal: 'lose_weight',
    bodyFat: 'low',
    dietRestrictions: [],
    preferredUnits: 'metric',
  });

  /**
   * Handler for when the preferred units value changes
   *
   * @param value The new preferred units value
   */
  onPreferredUnitsValueChanged(value: string | number) {
    const unit = this.data().unitsMap[value];
    this.heightUnit.set(unit.hText);
    this.weightUnit.set(unit.wText);
  }

  /**
   * Handler for when the submit button is clicked
   */
  onSubmitClicked() {
    const formValue = this.dietForm.value;
    const userInput = {
      ...formValue,
      dietRestrictions: formValue.dietRestrictions ? [formValue.dietRestrictions] : [],
    } as UserInputContract;

    this.store.generateDietPlan(userInput);
  }
}
