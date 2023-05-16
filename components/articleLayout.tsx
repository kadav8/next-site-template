import { getContent } from '@/services/articleContentService';
import { getArticle } from '@/services/planetscale';
import Link from 'next/link';

export default async function ArticleLayout({ slug, lang }: { slug: string; lang: string }) {
	const article = await getArticle([{ key: 'article.slug', operator: '=', value: slug }]);
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
