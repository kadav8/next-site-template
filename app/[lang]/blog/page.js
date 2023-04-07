import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export const metadata = {
  title: 'Site Template - Blog'
}

export default async function AboutPage({ params }) {  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[52rem] pt-24 text-gray-600">
        <h1 className="text-3xl font-serif mb-12">Blog</h1>
        {allPosts
          .filter(a => a.lang === params.lang)
          .sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1)
          .map((post) => (
            <Link
              key={post.url}
              className="flex flex-col space-y-1 mb-6 hover:underline"
              href={`/${params.lang}/blog/${post.url}`}
            >
              <div className="w-full flex flex-col">
                <p>{post.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}