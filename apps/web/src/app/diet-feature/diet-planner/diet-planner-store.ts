import { DietPlanContract, UserInputContract } from '@weaify/shared-types';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { pipe, tap, switchMap, iif, of } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { ENV } from '../../app.config';
import { MOCK_DIET_PLAN } from './diet-plan.mock';

/**
 * State interface for the diet planner feature, extending the base contract.
 */
export interface DietPlanState extends DietPlanContract {
  isLoading: boolean;
}

/**
 * Initial state for the diet planner feature.
 */
export const initialDietPlanState: DietPlanState = {
  userSummary: {
    fatGrams: 0,
    carbGrams: 0,
    proteinGrams: 0,
    dailyCalories: 0,
  },
  dietPlan: [],
  isLoading: false,
};

/**
 * Signal store for managing diet plan state and actions.
 */
export const DietPlannerStore = signalStore(
  { providedIn: 'root' },
  withState<DietPlanState>(initialDietPlanState),
  withComputed((store) => ({
    planReady: computed(() => store.dietPlan().length > 0 && !store.isLoading()),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    generateDietPlan: rxMethod<UserInputContract>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((payload) =>
          iif(
            () => ENV === 'dev',
            of(MOCK_DIET_PLAN).pipe(tap((mock) => patchState(store, { ...mock, isLoading: false }))),
            http.post<DietPlanState>('/api/diet-planner', payload).pipe(
              tapResponse({
                next: (dietPlan) => patchState(store, { ...dietPlan, isLoading: false }),
                error: (err) => {
                  patchState(store, { isLoading: false });
                  console.error('Error generating diet plan:', err);
                },
              }),
            ),
          ),
        ),
      ),
    ),
  })),
);
