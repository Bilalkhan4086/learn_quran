export const pricingPlans = [
  { daysPerWeek: 1, usd: 11, gbp: 10, pkr: 3000 },
  { daysPerWeek: 2, usd: 22, gbp: 19, pkr: 6000 },
  { daysPerWeek: 3, usd: 33, gbp: 29, pkr: 9000, recommended: true },
  { daysPerWeek: 4, usd: 44, gbp: 38, pkr: 12000 },
  { daysPerWeek: 5, usd: 55, gbp: 50, pkr: 15000 },
] satisfies PricingPlan[];

export type PricingPlan = {
  daysPerWeek: number;
  usd: number;
  gbp: number;
  pkr: number;
  recommended?: boolean;
};
