import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats number to redable format like 1k, 2.5m
 */
export const formatNumber = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short", // Use 'k' instead of 'thousand'
});
