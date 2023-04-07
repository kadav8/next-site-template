import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

export const metadata = {
  title: 'Site Template - Blog'
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    post: post.url,
  }));
}

export default async function PostPage({ params }) {
  const post = allPosts.find((post) => post.url === params.post);
  const Content = getMDXComponent(post.body.code)

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-4/5 lg:w-[52rem] pt-24 text-gray-600">
        <h1 className="text-3xl font-serif mb-12">{post.title}</h1>
        <div className="blog-post">
          <Content/>
        </div>
      </div>
    </div>
  );
}