import type { TechnicalPost } from "@/types";

/**
 * Real technical publications only (LinkedIn posts, articles, GitHub docs).
 *
 * Intentionally empty: no confirmed public publications at the moment, and we do
 * not create placeholders. When a real publication with technical weight exists
 * (backend, API, automation, database, cloud, deploy, tests, architecture), add
 * it here and reference it from a case study via `links.post`.
 */
export const technicalPosts: TechnicalPost[] = [];
