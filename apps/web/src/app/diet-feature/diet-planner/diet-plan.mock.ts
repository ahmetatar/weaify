import { DietPlanContract } from '@weaify/shared-types';

export const MOCK_DIET_PLAN: DietPlanContract = {
  userSummary: {
    dailyCalories: 1700,
    proteinGrams: 35,
    carbGrams: 40,
    fatGrams: 25,
  },
  dietPlan: [
    {
      day: 1,
      meals: {
        breakfast: {
          description: 'Scrambled eggs (2) with spinach, mushrooms, 1 slice whole-wheat toast.',
          protein_pct: '35',
          carb_pct: '40',
          fat_pct: '25',
        },
        morningSnack: {
          description: 'Greek yogurt (150g) with a few berries.',
          protein_pct: '50',
          carb_pct: '40',
          fat_pct: '10',
        },
        lunch: {
          description: 'Grilled chicken breast (120g) salad with mixed greens, bell peppers, cucumber, light vinaigrette.',
          protein_pct: '60',
          carb_pct: '20',
          fat_pct: '20',
        },
        afternoonSnack: {
          description: 'Small apple and 1 tbsp almond butter.',
          protein_pct: '10',
          carb_pct: '50',
          fat_pct: '40',
        },
        dinner: {
          description: 'Baked salmon (100g) with steamed broccoli and quinoa (1/2 cup cooked).',
          protein_pct: '40',
          carb_pct: '35',
          fat_pct: '25',
        },
      },
    },
    {
      day: 2,
      meals: {
        breakfast: {
          description: 'Oatmeal (1/2 cup dry) with protein powder (1 scoop), small banana.',
          protein_pct: '35',
          carb_pct: '50',
          fat_pct: '15',
        },
        morningSnack: {
          description: 'Handful (25g) almonds.',
          protein_pct: '15',
          carb_pct: '20',
          fat_pct: '65',
        },
        lunch: {
          description: 'Turkey and veggie wrap (whole wheat tortilla, 100g turkey breast, lettuce, tomato).',
          protein_pct: '45',
          carb_pct: '40',
          fat_pct: '15',
        },
        afternoonSnack: {
          description: 'Cottage cheese (100g) with a few cherry tomatoes.',
          protein_pct: '60',
          carb_pct: '20',
          fat_pct: '20',
        },
        dinner: {
          description: 'Lentil soup (1.5 cups) with a side of whole-wheat bread (1 slice).',
          protein_pct: '30',
          carb_pct: '50',
          fat_pct: '20',
        },
      },
    },
    {
      day: 3,
      meals: {
        breakfast: {
          description: 'Smoothie: 1 scoop protein, spinach, 1/2 banana, unsweetened almond milk.',
          protein_pct: '45',
          carb_pct: '40',
          fat_pct: '15',
        },
        morningSnack: {
          description: 'Hard-boiled egg (1).',
          protein_pct: '45',
          carb_pct: '5',
          fat_pct: '50',
        },
        lunch: {
          description: 'Tuna (canned in water, 100g) mixed with Greek yogurt, on lettuce cups.',
          protein_pct: '60',
          carb_pct: '10',
          fat_pct: '30',
        },
        afternoonSnack: {
          description: 'Rice cakes (2) with light cream cheese.',
          protein_pct: '10',
          carb_pct: '70',
          fat_pct: '20',
        },
        dinner: {
          description: 'Chicken stir-fry (120g chicken breast, mixed veggies) with small portion of brown rice (1/2 cup).',
          protein_pct: '40',
          carb_pct: '45',
          fat_pct: '15',
        },
      },
    },
    {
      day: 4,
      meals: {
        breakfast: {
          description: 'Whole-wheat English muffin with 1 poached egg, slice of low-fat cheese.',
          protein_pct: '30',
          carb_pct: '45',
          fat_pct: '25',
        },
        morningSnack: {
          description: 'Small pear.',
          protein_pct: '5',
          carb_pct: '90',
          fat_pct: '5',
        },
        lunch: {
          description: 'Quinoa salad (1 cup cooked) with black beans (1/2 cup), corn, salsa, avocado (1/4).',
          protein_pct: '25',
          carb_pct: '50',
          fat_pct: '25',
        },
        afternoonSnack: {
          description: 'Protein shake (1 scoop protein, water).',
          protein_pct: '80',
          carb_pct: '10',
          fat_pct: '10',
        },
        dinner: {
          description: 'Lean ground beef (100g) patty, large mixed green salad with light dressing.',
          protein_pct: '55',
          carb_pct: '20',
          fat_pct: '25',
        },
      },
    },
    {
      day: 5,
      meals: {
        breakfast: {
          description: 'Greek yogurt (150g) with chia seeds (1 tbsp) and a sprinkle of nuts.',
          protein_pct: '40',
          carb_pct: '30',
          fat_pct: '30',
        },
        morningSnack: {
          description: 'Baby carrots and hummus (2 tbsp).',
          protein_pct: '15',
          carb_pct: '50',
          fat_pct: '35',
        },
        lunch: {
          description: 'Leftover lean ground beef patty and salad from dinner Day 4.',
          protein_pct: '55',
          carb_pct: '20',
          fat_pct: '25',
        },
        afternoonSnack: {
          description: 'Orange.',
          protein_pct: '5',
          carb_pct: '90',
          fat_pct: '5',
        },
        dinner: {
          description: 'Baked cod (120g) with roasted asparagus and sweet potato (small, 100g).',
          protein_pct: '45',
          carb_pct: '40',
          fat_pct: '15',
        },
      },
    },
    {
      day: 6,
      meals: {
        breakfast: {
          description: 'Scrambled tofu (1/2 block) with turmeric, bell peppers, whole-wheat pita (1/2).',
          protein_pct: '30',
          carb_pct: '45',
          fat_pct: '25',
        },
        morningSnack: {
          description: 'Small handful of walnuts (20g).',
          protein_pct: '15',
          carb_pct: '15',
          fat_pct: '70',
        },
        lunch: {
          description: 'Chicken (100g) and vegetable skewer, served with a small side salad.',
          protein_pct: '60',
          carb_pct: '20',
          fat_pct: '20',
        },
        afternoonSnack: {
          description: 'Rice cakes (2) with avocado (1/4 small).',
          protein_pct: '5',
          carb_pct: '45',
          fat_pct: '50',
        },
        dinner: {
          description: 'Turkey chili (1.5 cups) with kidney beans, no cheese/sour cream.',
          protein_pct: '40',
          carb_pct: '45',
          fat_pct: '15',
        },
      },
    },
    {
      day: 7,
      meals: {
        breakfast: {
          description: 'Protein pancakes (1 serving, made with protein powder, oats, egg white).',
          protein_pct: '40',
          carb_pct: '45',
          fat_pct: '15',
        },
        morningSnack: {
          description: 'Small banana.',
          protein_pct: '5',
          carb_pct: '90',
          fat_pct: '5',
        },
        lunch: {
          description: 'Large mixed green salad with chickpeas (1/2 cup), cucumber, tomato, light dressing.',
          protein_pct: '25',
          carb_pct: '60',
          fat_pct: '15',
        },
        afternoonSnack: {
          description: 'Greek yogurt (100g).',
          protein_pct: '60',
          carb_pct: '30',
          fat_pct: '10',
        },
        dinner: {
          description: 'Lean pork tenderloin (120g) with steamed green beans and a small baked potato (150g).',
          protein_pct: '40',
          carb_pct: '45',
          fat_pct: '15',
        },
      },
    },
  ],
};
