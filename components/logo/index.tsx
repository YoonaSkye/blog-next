import { cn } from '@/lib/utils';
import { ImageAssets, WEBSITE } from '@/constants';

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <>
      <img
        src={ImageAssets.logo}
        alt={WEBSITE}
        className={cn('w-8 h-8 ', className)}
      />
    </>
  );
}
