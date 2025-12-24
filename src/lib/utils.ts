import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(targetId: string, offset: number = 80) {
  const element = document.getElementById(targetId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

export function getOptimizedImage(url: string, width: number = 800): string {
  if (!url.includes('cloudinary.com')) return url;

  if (url.includes('/upload/f_auto')) return url;

  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
}