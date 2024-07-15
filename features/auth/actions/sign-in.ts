'use server';

import { PATHS } from '@/constants';
import { signIn } from '@/lib/auth';

export const signInWithGithub = async () => {
  await signIn('github', {
    redirectTo: PATHS.ADMIN_HOME,
  });
};
