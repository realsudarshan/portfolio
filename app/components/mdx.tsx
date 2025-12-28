import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href || '';

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function CustomImage(props: React.ComponentProps<typeof Image>) {
  return (
    <Image
      width={1280}
      height={720}
      {...props}
      alt={props.alt?.length ? `Illustration of ${props.alt}` : props.alt || ''}
    />
  );
}

function CustomPre(props: React.HTMLAttributes<HTMLPreElement>) {
  const className = props.className;

  return (
    <pre className={className} data-lang={className?.replace(/language-/i, '')}>
      {props.children}
    </pre>
  );
}

const components = {
  a: CustomLink,
  Image: CustomImage,
  pre: CustomPre
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism as any,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
};

export function CustomMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={options}
      components={components}
    />
  );
}
