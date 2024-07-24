import { DrupalClient } from "next-drupal";

// Use type assertion to ensure TypeScript knows the values are strings
const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string;
const previewSecret = process.env.DRUPAL_PREVIEW_SECRET as string;

export const drupal = new DrupalClient(baseUrl, {
  previewSecret,
});
