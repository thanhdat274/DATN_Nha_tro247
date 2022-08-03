import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

export interface IDemoProps {}

interface Post {
  id: string;
  title: string;
}
interface PageProps {
  post: Post;
}

export default function Demo({ post }: PageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post Page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {
    props: {
      post: {
        id: '123-abc',
        title: 'Learn NextJS',
      },
    },
  };
};
