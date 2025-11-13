import { Route } from '@angular/router';
import { DietPlan, DietPlanner } from './diet-feature';

const PAGE_TITLES: { [page: string]: { header: string; desc: string } } = {
  plan: {
    header: 'Your Personalized Diet Journey',
    desc: 'Tell us about yourself and we\'ll create a nutrition plan tailored to your goals and lifestyle',
  },
  planner: { header: 'Your Personalized 7-Day Diet Plan', desc: 'Follow this plan to achieve your goals' },
};

export const appRoutes: Route[] = [
  {
    path: '',
    component: DietPlanner,
    data: PAGE_TITLES['planner']
  },
  {
    path: 'diet-plan',
    component: DietPlan,
    data: PAGE_TITLES['plan']
  },
];
