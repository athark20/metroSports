import { SITE } from "./site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number) {
  return `${SITE.currency.symbol}${amount.toLocaleString(SITE.currency.locale)}`;
}
