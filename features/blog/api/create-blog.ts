import { useRequest } from 'ahooks';
import { createBlog } from '../actions';

export const useCreateBlog = () => {
  return useRequest(createBlog, {});
};
