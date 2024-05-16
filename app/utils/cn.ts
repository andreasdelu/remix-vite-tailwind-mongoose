import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// This function is a wrapper around clsx that merges the classes with tailwind classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
