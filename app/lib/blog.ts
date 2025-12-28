import fs from 'fs';
import matter from 'gray-matter';
import { unstable_cache } from 'next/cache';
import path from 'path';

type Metadata = {
  title: string;
  description: string;
  banner: string;
  date: string;
  tags: string[];
};

export type BlogPost = {
  metadata: Metadata;
  slug: string;
  content: string;
};

export type Blog = BlogPost[];

function parseFrontmatter(source: string) {
  const { data: frontmatter, content } = matter(source);
  return {
    metadata: frontmatter as Metadata,
    content
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content
    };
  });
}

// Cache blog posts to avoid re-parsing on every request
export const getBlogPosts = unstable_cache(
  async () => {
    return getMDXData(path.join(process.cwd(), 'content'));
  },
  ['blog-posts'],
  { revalidate: 3600 } // Revalidate every hour
);
