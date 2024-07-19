export const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',');

export enum PUBLISHED_ENUM {
  ALL = 'all',
  PUBLISHED = 'published',
  NO_PUBLISHED = 'no_published',
}
