import { getContent } from '@/services/articleContentService';
import { getArticle, listArticles } from '@/services/planetscale';
import Link from 'next/link';

export const metadata = {
	title: 'Site Template - Articles',
};

export const dynamicParams = true;
export const dynamic = 'auto';
//export const runtime = 'edge';
//export const preferredRegion = 'fra1';

export async function generateStaticParams() {
	return [{ slug: 'slug-2' }];
}

export default async function ArticlePage({ params }) {
	const { slug } = params;
	const res = await fetch('https://next-site-template.vercel.app/api/articles/' + slug, { next: { revalidate: 1000 } });
	const article = await res.json();
	//const article = await getArticle([{ key: 'article.slug', operator: '=', value: slug }]);
	const articleContent = article.content;
	return (
		<>
			<div className='flex items-center flex-col'>
				<article className='content'>
					<div className='articleContainer'>
						<div className='breadcrumb'></div>
						<h1 className='articleTitle headingPrimary'>{article.title}</h1>
						<p className='articleLead'>{article.lead}</p>
						<div className='articleContent'>
							{articleContent.content.map((cont: any, i: number) => {
								return getContent(cont, i);
							})}
						</div>
					</div>
				</article>
			</div>
		</>
	);
}
