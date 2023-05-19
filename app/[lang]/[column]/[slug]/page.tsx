import { getContent } from '@/services/articleContentService';
import Link from 'next/link';
import notFound from './not-found';

const API_BASE_URL = process.env.API_BASE_URL || '';
const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY || '';

export const revalidate = 'force-cache';
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata = {
	title: 'Site Template - Articles',
};

export default async function ArticlePage({ params }) {
	const { lang, slug } = params;
	const res = await fetch(API_BASE_URL + '/articles/' + slug, { next: { revalidate: 43200 }, headers: { "Api-Key": PUBLIC_API_KEY } });
	const article = await res.json();
	if (!article) notFound();
	const articleContent = article.content;
	return (
		<>
			{articleContent && articleContent.content ? (
				<div className='flex items-center flex-col'>
					<article className='content'>
						<div className='articleContainer'>
							<div className='breadcrumb'>
								<Link href={`/${lang}/${lang === 'hu' ? 'rovat' : 'column'}/${article.columnSlug}`}>
									{article.columnName}
								</Link>
							</div>
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
			) : (
				'Loading..'
			)}
		</>
	);
}
