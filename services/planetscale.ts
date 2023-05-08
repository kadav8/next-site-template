import { Generated, Kysely } from 'kysely';
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
}

interface CategoryTable {
	id: Generated<number>;
	name: string;
	slug: string;
}

interface CategoryArticleRelation {
	categoryId: number;
	articleId: number;
}

interface Database {
	Article: ArticleTable;
	Category: CategoryTable;
	_Category_Article_Relation: CategoryArticleRelation;
}

export const queryBuilder = new Kysely<Database>({
	dialect: new PlanetScaleDialect({
		url: process.env.DATABASE_URL,
	}),
});

// ARTICLES:

export async function listArticles() {
	return await execute(queryBuilder.selectFrom('Article').select(['id', 'title', 'state']));
}

export async function getArticle(id: any) {
	const article = await executeTakeFirst(queryBuilder.selectFrom('Article').selectAll().where('id', '=', id));
	const relations = await execute(
		queryBuilder.selectFrom('_Category_Article_Relation').selectAll().where('articleId', '=', id)
	);
	article.categories = relations.map((relation: any) => relation.categoryId.toString());
	return article;
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
