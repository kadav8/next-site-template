import { getContent } from '@/services/articleContentService';
import { Article, getArticle, listArticles } from '@/services/planetscale';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
	title: 'Site Template - Articles',
};
export const dynamicParams = true;
export const dynamic = 'auto';

export async function generateStaticParams() {
	const articles = await listArticles();
	const hu = articles.map(article => ({
		lang: 'hu',
		column: article.columnSlug,
		slug: article.slug,
	}));
	const concat = hu.concat(
		articles.map(article => ({
			lang: 'en',
			column: article.columnSlug,
			slug: article.slug,
		}))
	);
	return concat;
}

export default async function ArticlePage({ params }) {
	const { column, slug, lang } = params;
	const article = await getArticle([{ key: 'article.slug', operator: '=', value: slug }]);
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
