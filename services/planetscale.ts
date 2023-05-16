import { ComparisonOperatorExpression, Generated, Kysely, ReferenceExpression } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface ArticleTable {
	id: Generated<number>;
	title: string;
	slug: string;
	state: string;
	lead: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	coverImage: string;
	coverAlt: string;
	metaTitle: string;
	metaDescription: string;
	columnId: number;
}

interface ColumnTable {
	id: Generated<number>;
	name: string;
	slug: string;
}

export interface Column {
	id: number;
	name: string;
	slug: string;
}

export interface Article {
	id: number;
	title: string;
	slug: string;
	state: string;
	lead: string;
	content: any;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	coverImage: string;
	coverAlt: string;
	metaTitle: string;
	metaDescription: string;
	columnId: number;
	columnSlug: string;
	columnName: string;
}

interface Database {
	article: ArticleTable;
	column: ColumnTable;
}

export const queryBuilder = new Kysely<Database>({
	dialect: new PlanetScaleDialect({
		url: process.env.DATABASE_URL,
	}),
});

// ARTICLES:

export async function listArticles(): Promise<Article[]> {
	return await execute(
		queryBuilder
			.selectFrom('article')
			.innerJoin('column', 'column.id', 'article.columnId')
			.select([
				'article.id',
				'article.title',
				'article.state',
				'article.columnId',
				'article.createdAt',
				'article.slug',
				'column.slug as columnSlug',
				'column.id as columnId',
			])
			.limit(1)
			.orderBy('article.createdAt', 'desc')
	);
}

export async function listColumns(): Promise<Column[]> {
	return await execute(queryBuilder.selectFrom('column').select(['id', 'name', 'slug']));
}

interface ArticleCondition {
	key: ReferenceExpression<Database, 'article'>;
	operator: ComparisonOperatorExpression;
	value: any;
}

export async function getArticle(conditions: ArticleCondition[]): Promise<Article> {
	let query = queryBuilder
		.selectFrom('article')
		.innerJoin('column', 'column.id', 'article.columnId')
		.selectAll()
		.select([
			'article.slug',
			'article.columnId',
			'article.title',
			'article.content',
			'article.coverAlt',
			'article.lead',
			'column.name as columnName',
			'column.slug as columnSlug',
		]);

	conditions.forEach(condition => {
		query = query.where(condition.key, condition.operator, condition.value);
	});
	const sql = query.compile();
	console.log('query: ', sql.sql, ', params: ', sql.parameters);
	return await executeTakeFirst(query);
}
// UTILS:

async function execute(query: any) {
	try {
		return await query.execute();
	} catch (error: any) {
		console.log('Sql execution failed', error);
		return 'Sql execution failed';
	}
}

async function executeTakeFirst(query: any) {
	try {
		return await query.executeTakeFirst();
	} catch (error: any) {
		console.log('Sql execution failed', error);
		return 'Sql execution failed';
	}
}
