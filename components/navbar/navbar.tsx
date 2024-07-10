'use client';

import { NICKNAME, PATHS, SOURCE_CODE_GITHUB_PAGE, WEBSITE } from '@/constants';
import Logo from '../logo';
import NextLink from '../next-link';
import { navItems } from './config';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import ModeToggle from '../mode-toggle';
import { Button } from '../ui/button';
import { IconBrandGithub } from '../icons';
import { UserCog } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        'w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0 flex justify-center z-10'
      )}
    >
      <div className="flex h-16  w-full  items-center p-4 sm:p-8 md:max-w-screen-md 2xl:max-w-screen-xl">
        <NextLink
          href={PATHS.SITE_HOME}
          className="mr-4 hidden sm:flex"
          aria-label={NICKNAME}
        >
          <Logo />
          <span className="ml-2 text-base font-semibold text-primary">
            {WEBSITE}
          </span>
        </NextLink>
        <div className="mr-8 hidden h-16 flex-1 items-center justify-end text-base font-medium sm:flex">
          {navItems.map((el) => (
            <Link
              href={el.link}
              key={el.link}
              className={cn(
                'font-normal text-sm text-muted-foreground transition-colors px-4 py-2',
                'hover:font-semibold  hover:text-primary',
                pathname === el.link && 'font-semibold text-primary'
              )}
            >
              {el.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
          <ModeToggle />
          <Link
            href={SOURCE_CODE_GITHUB_PAGE}
            target="_blank"
            title={SOURCE_CODE_GITHUB_PAGE}
            aria-label={SOURCE_CODE_GITHUB_PAGE}
          >
            <Button variant="outline" size={'icon'} aria-label="Github Icon">
              <IconBrandGithub className="text-base" />
            </Button>
          </Link>
          <Link
            href={PATHS.ADMIN_HOME}
            target="_blank"
            rel="nofollow"
            title="后台管理"
            aria-label={PATHS.ADMIN_HOME}
          >
            <Button variant="outline" size={'icon'} aria-label="后台管理">
              <UserCog className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
