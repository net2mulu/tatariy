import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes efficiently.
 *
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string
 *
 * Example usage:
 * cn("text-red-500", isActive && "bg-blue-500", { "p-4": isPadded })
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

