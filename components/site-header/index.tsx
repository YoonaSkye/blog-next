import { siteConfig } from '@/config/site';
import { Icons } from '../icons';
import ModeToggle from '../mode-toggle';
import NextLink from '../next-link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-screen-xl">
        <MainNav />
        <div className="flex flex-1 sm:flex-none items-center justify-end gap-1">
          <NextLink
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 px-0 hidden sm:inline-flex"
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </NextLink>

          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
