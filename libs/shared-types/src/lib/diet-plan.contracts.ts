export const DIET_PLAN_SCHEMA = {
  root: {
    u: 'userSummary',
    d: 'dietPlan',
  },
  userSummary: {
    k: 'dailyCalories',
    p: 'proteinGrams',
    c: 'carbGrams',
    f: 'fatGrams',
  },
  dietPlanItem: {
    y: 'day',
    m: 'meals',
  },
  meals: {
    b: 'breakfast',
    s: 'morningSnack',
    l: 'lunch',
    a: 'afternoonSnack',
    d: 'dinner',
  },
  mealDetail: {
    x: 'description',
    P: 'protein_pct',
    C: 'carb_pct',
    F: 'fat_pct',
  },
};

export interface MealInformation {
  /** Human-friendly description of the meal (foods, portion notes, etc.). */
  description: string;

  /** Protein percentage for the meal (e.g. '30%' or '0.30'). */
  protein_pct: string;

  /** Carbohydrate percentage for the meal (e.g. '40%' or '0.40'). */
  carb_pct: string;

  /** Fat percentage for the meal (e.g. '30%' or '0.30'). */
  fat_pct: string;
}

export interface SummaryInformation {
  /** Total carbohydrate grams per day. */
  carbGrams: number;

  /** Total fat grams per day. */
  fatGrams: number;

  /** Total daily calories. */
  dailyCalories: number;

  /** Total protein grams per day. */
  proteinGrams: number;
}

export interface DietPlanDetails {
  /** Details for a single day within the diet plan. */
  day: number;

  /** Meal information for the day. */
  meals: {
    breakfast: MealInformation;
    morningSnack: MealInformation;
    lunch: MealInformation;
    afternoonSnack: MealInformation;
    dinner: MealInformation;
  };
}

export interface DietPlanContract {
  /** Summary information for the entire diet plan. */
  userSummary: SummaryInformation;

  /** Array of diet plan details for each day. */
  dietPlan: DietPlanDetails[];
}
