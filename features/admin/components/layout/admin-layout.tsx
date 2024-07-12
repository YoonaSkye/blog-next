'use client';

import Logo from '@/components/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { NICKNAME, PATHS, PATHS_MAP } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Book,
  CodeXml,
  Home,
  PanelLeftClose,
  PanelRightClose,
  ScrollIcon,
  Tags,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export const adminNavItems: Array<{
  label?: string;
  link: string;
  icon?: React.ReactNode;
}> = [
  {
    label: PATHS_MAP[PATHS.ADMIN_HOME],
    link: PATHS.ADMIN_HOME,
    icon: <Home className="size-4" />,
  },
  {
    label: PATHS_MAP[PATHS.ADMIN_TAG],
    link: PATHS.ADMIN_TAG,
    icon: <Tags className="size-4" />,
  },
  {
    label: PATHS_MAP[PATHS.ADMIN_BLOG],
    link: PATHS.ADMIN_BLOG,
    icon: <Book className="size-4" />,
  },
  {
    label: PATHS_MAP[PATHS.ADMIN_SNIPPET],
    link: PATHS.ADMIN_SNIPPET,
    icon: <CodeXml className="size-4" />,
  },
  {
    label: PATHS_MAP[PATHS.ADMIN_NOTE],
    link: PATHS.ADMIN_NOTE,
    icon: <ScrollIcon className="size-4" />,
  },
];

export function AdminLayout({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside
        className={cn(
          'hidden sm:flex flex-col border-r bg-background transition-all',
          open ? 'w-36' : 'w-14'
        )}
      >
        <Link
          href={PATHS.ADMIN_HOME}
          className={cn(
            'hidden sm:flex mt-[10vh] mb-[5vh] justify-center items-center whitespace-nowrap'
          )}
          aria-label={NICKNAME}
        >
          <Logo className="size-8" />
          {open && (
            <span className="ml-2 text-base font-semibold text-primary">
              后台管理
            </span>
          )}
        </Link>
        <nav
          className={cn(
            'h-full flex flex-col items-center gap-4 sm:py-5',
            open ? 'px-4' : 'px-2'
          )}
        >
          {adminNavItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={cn(
                buttonVariants({
                  variant: item.link === pathname ? 'default' : 'ghost',
                  size: open ? 'default' : 'icon',
                }),
                '!w-full transition-all'
              )}
            >
              {item.icon}
              {open && <span className="ml-4 text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Button size={'icon'} variant={'outline'}>
            {open ? (
              <PanelLeftClose
                className="size-5"
                onClick={() => setOpen(false)}
              />
            ) : (
              <PanelRightClose
                className="size-5"
                onClick={() => setOpen(true)}
              />
            )}
          </Button>
        </nav>
      </aside>
      {children}
    </div>
  );
}
