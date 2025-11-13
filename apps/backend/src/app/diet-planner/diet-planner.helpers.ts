import { DIET_PLAN_SCHEMA, DietPlanContract, UserInputContract } from '@weaify/shared-types';

const UNITS_MAP = {
  us: { hText: 'inches', wText: 'lbs' },
  metric: { hText: 'cm', wText: 'kg' },
};

/**
 * Builds the prompt string sent to the LLM for generating a 7-day diet plan.
 *
 * The output prompt:
 * - Embeds user input (age, gender, height, weight, activity, goal).
 * - Instructs the model to create a 7-day / 5-meal diet plan.
 * - Enforces minified JSON output with short keys.
 * - Limits each meal description ("x") to 150 characters.
 *
 * @param {UserInputContract} userInput raw user parameters used to construct the diet-generation prompt.
 * @returns {string} fully formatted prompt to be sent to the AI model.
 */
export function generatePrompt(userInput: UserInputContract): string {
  const height = `${userInput.height}${UNITS_MAP[userInput.preferredUnits].hText}`;
  const weight = `${userInput.weight}${UNITS_MAP[userInput.preferredUnits].wText}`;

  return `U:${userInput.age},${userInput.gender},${height},${weight},${userInput.activityLevel},${userInput.goal}
  Make 7-day plan,5 meals/day(b,s,l,a,d).
  Each meal:desc+macro perc(P,C,F)
  Max 150 char for "x"
  Return ONLY minified JSON matching:
  {"u":{"k":n,"p":n,"c":n,"f":n},"d":[{"y":n,"m":{"b":{"x":s,"P":n,"C":n,"F":n},"s":{"x":s,"P":n,"C":n,"F":n},"l":{"x":s,"P":n,"C":n,"F":n},"a":{"x":s,"P":n,"C":n,"F":n},"d":{"x":s,"P":n,"C":n,"F":n}}}]}`;
}

/**
 * Normalizes a diet-plan API response by expanding all short keys
 * into their long equivalents using the schema-driven key expander.
 *
 * @param {any} response raw API response with short/minified keys.
 * @returns {DietPlanContract} fully expanded, strongly typed diet plan object.
 */
export function normalizeResponse(response: any): DietPlanContract {
  return expandKeys(response) as DietPlanContract;
}

/**
 * Expands short JSON keys into long names using a context-aware schema.
 *
 * @param {any} obj any JSON-like structure to process.
 * @param {string|null} [parentKey=null] parent key used to detect the schema context.
 * @returns {any} a new object/array with expanded keys.
 */
function expandKeys(obj: any, parentKey: string | null = null): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => expandKeys(v, parentKey));
  }

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const dict = DIET_PLAN_SCHEMA[resolveContext(parentKey)] ?? {};

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const longKey = dict[key] ?? key;
    acc[longKey] = expandKeys(value, longKey);
    return acc;
  }, {} as Record<string, any>);
}

/**
 * Determines which schema context should be used when expanding keys,
 * based on the name of the parent key.
 *
 * @param {string|null} parentKey the key of the parent object during recursive expansion.
 * @returns {keyof typeof DIET_PLAN_SCHEMA} the schema context to use for the current recursion level.
 */
function resolveContext(parentKey: string | null): keyof typeof DIET_PLAN_SCHEMA {
  if (!parentKey) return 'root';
  if (parentKey === 'userSummary') return 'userSummary';
  if (parentKey === 'dietPlan') return 'dietPlanItem';
  if (parentKey === 'meals') return 'meals';
  return 'mealDetail';
}
