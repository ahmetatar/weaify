/**
 * Contract defining the structure of user input data for health and fitness calculations.
 */
export interface UserInputContract {
  /**
   * Age in years (integer). Used for metabolic rate calculations.
   */
  age: number;

  /**
   * Gender as a short identifier (for example: 'male', 'female', 'other').
   * Used to select sex-specific formulas where applicable.
   */
  gender: 'male' | 'famale' | 'gender'

  /**
   * Height value in the units specified by `preferredUnits` (e.g., cm or in).
   */
  height: number;

  /**
   * Weight value in the units specified by `preferredUnits` (e.g., kg or lb).
   */
  weight: number;

  /**
   * Body fat percentage (0-100). Optional but used by some calculation methods.
   */
  bodyFat: 'low' | 'medium' | 'high';

  /**
   * Activity level descriptor (for example: 'desk', 'light', 'moderate', 'active', 'very active').
   * Used to scale total daily energy expenditure (TDEE).
   */
  activityLevel: '' | 'desk' | 'light' | 'moderate' | 'active' | 'very active';

  /**
   * Preferred measurement units (for example: 'metric' or 'imperial').
   */
  preferredUnits: 'metric' | 'imperial';

  /**
   * Array of dietary restriction identifiers (for example: ['vegan', 'gluten-free']).
   * Used to filter or adapt meal plans and suggestions.
   */
  dietRestrictions: string[];

  /**
   * User's goal (for example: 'lose_weight', 'maintain_weight', 'gain_muscle').
   * Drives macronutrient and calorie targets.
   */
  goal: 'lose_weight' | 'maintain_weight' | 'gain_muscle';
}
