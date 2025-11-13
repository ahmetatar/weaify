import { ChangeDetectionStrategy, Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { DietPlannerStore } from '../diet-planner';
import { SummaryInformation } from '@weaify/shared-types';
import { ButtonOptions } from '@weaify/web-shared-components';
import { UIDataService } from '../../app.data';
import { KeyValuePipe } from '@angular/common';

@Component({
  imports: [ButtonOptions, KeyValuePipe],
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.html',
  styleUrls: ['./diet-plan.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DietPlan {
  private readonly store = inject(DietPlannerStore);
  private readonly uiDataService = inject(UIDataService);

  /** Selected day for viewing meals */
  selectedDay = signal(1);

  /** UI data for labels and other display information */
  data = this.uiDataService.getUIDataSignal();

  /** Options for selecting a day in the diet plan */
  dayOptions = this.store.dietPlan().map((meal) => ({ value: meal.day, label: `Day ${meal.day}` }));

  /** Meals selected for the currently selected day */
  selectedMeals = computed(() => {
    const day = this.selectedDay();
    const selectedPlan = this.store.dietPlan().find((meal) => meal.day === day);
    return selectedPlan?.meals;
  });

  /** Summary information for the user's diet plan */
  get summary() {
    const summary = this.store.userSummary();
    return Object.keys(summary).map((key) => {
      const k = key as keyof SummaryInformation;
      return {
        key,
        label: this.data().summaryLabels[k],
        value: summary[k],
      };
    });
  }

  /** Handler for when the selected day changes */
  onDayChanged(day: string | number) {
    this.selectedDay.set(Number(day));
  }
}
