'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

const themeOptions = [
  {
    value: 'light',
    label: '浅色',
    icon: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  },
  {
    value: 'dark',
    label: '深色',
    icon: <MoonStar className="h-[1.2rem] w-[1.2rem]" />,
  },
  // {
  //   value: 'system',
  //   label: '系统',
  //   icon: <Monitor className="text-base" />,
  // },
];

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className={cn('min-w-[6rem]')}>
        {themeOptions.map((optoin) => (
          <DropdownMenuItem
            key={optoin.value}
            className="cursor-pointer"
            onClick={() => setTheme(optoin.value)}
          >
            <div className="flex items-center  gap-2">
              <div
                className={cn(
                  theme === optoin.value ? 'opacity-100' : 'opacity-50',
                  'flex items-center'
                )}
              >
                {optoin.icon}
              </div>
              <div
                className={cn(
                  'text-sm',
                  theme === optoin.value ? 'opacity-100' : 'opacity-50'
                )}
              >
                {optoin.label}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
