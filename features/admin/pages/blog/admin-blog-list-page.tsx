'use client';

import { Input } from '@/components/ui/input';
import { AdminContentLayout } from '../../components';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, RotateCw, Search } from 'lucide-react';

export function AdminBlogListPage() {
  const [inputParams, updateInputParams] = useState();
  return (
    <AdminContentLayout>
      <div className="grid grid-cols-4 items-end gap-4 px-1 py-4">
        <Input placeholder="请输入标题" />
        {/* 指定邮箱权限拥有的功能 */}
        <div className="flex items-center space-x-4">
          <Button>
            <Search className="mr-2 size-4" />
            搜索
          </Button>
          <Button>
            <RotateCw className="mr-2 size-4" />
            重置
          </Button>
          <Button>
            <Plus className="mr-2 size-4" />
            创建博客
          </Button>
        </div>
      </div>
      {/* tags展示部分 */}
      {/* blog数据table */}
    </AdminContentLayout>
  );
}
