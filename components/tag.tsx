import Link from 'next/link';
import { badgeVariants } from './ui/badge';
import { slug } from 'github-slugger';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export default function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'no-underline rounded-md',
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag}
    </Link>
  );
}
