import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export type NextLinkProps = React.ComponentProps<typeof Link>;

export default function NextLink({
  children,
  className,
  ...props
}: NextLinkProps) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant: 'ghost' }), className)}
    >
      {children}
    </Link>
  );
}
