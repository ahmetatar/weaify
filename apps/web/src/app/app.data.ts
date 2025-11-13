import { EnvironmentProviders, inject, Injectable, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { ButtonOption } from '@weaify/web-shared-components';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { toSignal } from '@angular/core/rxjs-interop';
import { SummaryInformation } from '@weaify/shared-types';

export interface UIData {
  /**
   * A list of selectable gender options (e.g., Male, Female, Non-binary).
   */
  genders: ButtonOption[];

  /**
   * A list of selectable unit options (e.g., Metric or U.S. Standard)
   */
  units: ButtonOption[];

  /**
   * A list of selectable body fat level options (e.g., Low, Medium, High).
   */
  bodyFats: ButtonOption[];

  /**
   * A list of selectable goal options (e.g., Lose Weight, Maintain Weight, Gain Muscle).
   */
  goals: ButtonOption[];

  /**
   * A mapping of unit identifiers to their corresponding height and weight text representations.
   */
  unitsMap: Record<string, { hText: string; wText: string }>;

  /**
   * A list of selectable activity level options (e.g., Desk job, Lightly active, Active daily).
   */
  activityLevels: ButtonOption[];

  /**
   * A list of meal icon mappings
   */
  mealIcons: Record<string, string>;

  /**
   * A list of meal names
   */
  mealNames: Record<string, string>;

  /**
   * A list of summary info labels
   */
  summaryLabels: Record<keyof SummaryInformation, string>;
}

/**
 * The default diet configuration with empty options.
 */
export const DEFAULT_UI_DATA: UIData = {
  genders: [],
  units: [],
  bodyFats: [],
  unitsMap: {},
  goals: [],
  activityLevels: [],
  mealIcons: {},
  mealNames: {},
  summaryLabels: {
    dailyCalories: '',
    proteinGrams: '',
    fatGrams: '',
    carbGrams: '',
  },
};

/**
 * Injection token that provides the URL for fetching the diet configuration.
 *
 * This token can be used to inject a configuration URL (typically a JSON endpoint)
 * that defines available options such as units, genders, and body fat categories.
 *
 * @constant
 * @type {InjectionToken<string>}
 */
export const UI_DATA_URL: InjectionToken<string> = new InjectionToken<string>('UI data url');

/**
 * Provides the diet configuration URL as an environment provider.
 *
 * This helper function simplifies registering the diet configuration URL
 * in Angular’s dependency injection system. It uses the {@link UI_DATA_URL}
 * injection token to supply a URL value that components or services can inject
 * to retrieve diet configuration data.
 *
 * @function provideDietPlannerUIConfig
 * @param {string} url - The URL pointing to the diet configuration resource (e.g., a JSON file or API endpoint).
 * @returns {EnvironmentProviders} An Angular environment provider that registers the given diet configuration URL.
 *
 * @example
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideDietPlannerUIConfig('/assets/configs/diet.json')
 *   ]
 * });
 */
export function provideUIData(url: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: UI_DATA_URL,
      useValue: url,
    },
  ]);
}

/**
 * Service responsible for fetching and providing diet configuration data.
 */
@Injectable({
  providedIn: 'root',
})
export class UIDataService {
  private readonly http = inject(HttpClient);
  private readonly configUrl = inject(UI_DATA_URL);

  /**
   * Fetches the diet configuration from the specified URL.
   *
   * @returns An observable that emits the diet configuration data.
   */
  getUIData$() {
    return this.http.get<UIData>(this.configUrl).pipe(shareReplay(1));
  }

  getUIDataSignal() {
    return toSignal(this.getUIData$(), {
      initialValue: DEFAULT_UI_DATA,
    });
  }
}
