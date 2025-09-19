export const useCdn = false;

/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const readToken = process.env.SANITY_API_READ_TOKEN || "";

export const writeToken = process.env.SANITY_API_WRITE_TOKEN || "";

export const developerToken = process.env.SANITY_API_DEV_TOKEN || "";

// Validate the API version
function validateApiVersion(version: string): string {
  const isValid = /^(\d{4}-\d{2}-\d{2}|1)$/.test(version);
  if (!isValid) {
    throw new Error(`Invalid API version string: ${version}`);
  }
  return version;
}

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = validateApiVersion(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-09-05"
);

// Used to generate URLs for previewing your content
export const DRAFT_MODE_ROUTE = "/api/draft";

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = "/studio";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
