'use client';

import ModeToggle from '@/components/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SettingsIcon } from 'lucide-react';
import { signOutAndRedirect } from '@/features/auth/actions/sign-out';

type AdminContentLayoutProps = {
  breadcrumb?: React.ReactNode;
} & React.PropsWithChildren;

export function AdminContentLayout({ children }: AdminContentLayoutProps) {
  async function handleLogout() {
    await signOutAndRedirect();
  }
  return (
    <div className="h-screen flex-1 overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 py-2 sm:static sm:h-auto sm:px-6">
        {/* 移动端的导航栏 */}
        {/* 面包屑 */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          {/* 个人信息下拉按钮 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SettingsIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="cursor-pointer">
                我的账号
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                设置
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                帮助
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                退出登录
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <ScrollArea className="h-screen px-6 pt-6">{children}</ScrollArea>
    </div>
  );
}
