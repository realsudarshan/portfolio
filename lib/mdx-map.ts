/**
 * Static slug → MDX component map.
 * Each entry is a lazy import so webpack can statically analyze
 * the module graph and code-split per post.
 *
 * Add a new entry here whenever a new .mdx file is added to content/.
 */
import type { ComponentType } from 'react';

export const mdxMap: Record<string, () => Promise<{ default: ComponentType }>> = {
  '7-ways-to-secure-your-browser': () => import('../content/7-ways-to-secure-your-browser.mdx'),
  '8-best-productivity-tools-front-end-developers-to-use-in-2023': () => import('../content/8-best-productivity-tools-front-end-developers-to-use-in-2023.mdx'),
  'a-guide-to-animated-theme-toggle': () => import('../content/a-guide-to-animated-theme-toggle.mdx'),
  'building-a-blog-with-nextjs': () => import('../content/building-a-blog-with-nextjs.mdx'),
  'building-of-sarathi': () => import('../content/building-of-sarathi.mdx'),
  'building-ryo-arena-multi-agent-ai-council-for-crypto-tokens': () => import('../content/building-ryo-arena-multi-agent-ai-council-for-crypto-tokens.mdx'),
  'create-a-dynamic-HTML-time-tag-using-React': () => import('../content/create-a-dynamic-HTML-time-tag-using-React.mdx'),
  'creating-a-theme-toggle-using-sass': () => import('../content/creating-a-theme-toggle-using-sass.mdx'),
  'making-of-dotly': () => import('../content/making-of-dotly.mdx'),
  'making-of-gyanwalla-lms': () => import('../content/making-of-gyanwalla-lms.mdx'),
  'making-of-sero-fero': () => import('../content/making-of-sero-fero.mdx'),
  'object-prototype-equivalent': () => import('../content/object-prototype-equivalent.mdx'),
  'project-management-tools': () => import('../content/project-management-tools.mdx'),
  'receipt_tracker_blog': () => import('../content/receipt_tracker_blog.mdx'),
  'switching-backend-firebase-appwrite': () => import('../content/switching-backend-firebase-appwrite.mdx'),
  'tanstack-ultimate-toolkit': () => import('../content/tanstack-ultimate-toolkit.mdx'),
  'tips-to-speed-up-your-website-design': () => import('../content/tips-to-speed-up-your-website-design.mdx'),
  'understanding-node-file-module': () => import('../content/understanding-node-file-module.mdx'),
  'understanding-node-path-module': () => import('../content/understanding-node-path-module.mdx'),
};
