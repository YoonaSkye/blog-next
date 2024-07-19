import { ERROR_NO_PERMISSION } from '@/constants';
import { noPermission } from '@/features/user';
import { type CreateBlogDTO, createBlogSchema } from '../types';
import prisma from '@/lib/prisma';

export const getBlogs = async () => {};

export const createBlog = async (params: CreateBlogDTO) => {
  if (await noPermission()) {
    throw ERROR_NO_PERMISSION;
  }

  const result = await createBlogSchema.safeParseAsync(params);
  if (!result.success) {
    const error = result.error.format()._errors?.join(';');
    throw new Error(error);
  }

  const { title, slug, description, body, published, cover, author, tags } =
    result.data;

  const blogs = await prisma.blog.findMany({
    where: {
      OR: [{ title }, { slug }],
    },
  });

  if (blogs.length) {
    throw new Error('标题或者slug重复');
  }

  const blog = await prisma.blog.create({
    data: {
      title,
      slug,
      description,
      body,
      published,
      cover,
    },
  });
};

export const updateBlog = async () => {};

export const deleteBlogById = async () => {};
