declare module '@/components/ui/announcements' {
  import { FC } from 'react';
  
  interface AnnouncementsProps {
    message: string;
    link: string;
    linkText: string;
  }
  
  export const Announcements: FC<AnnouncementsProps>;
}

declare module '@/components/ui/blog-list' {
  import { FC } from 'react';
  
  interface BlogPost {
    title: string;
    summary: string;
    date: string;
    link: string;
  }
  
  interface BlogListProps {
    posts: BlogPost[];
  }
  
  export const BlogList: FC<BlogListProps>;
}