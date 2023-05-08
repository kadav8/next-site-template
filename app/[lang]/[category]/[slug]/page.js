import { getArticle, listArticles } from '@/services/planetscale';

export const metadata = {
    title: 'Site Template - Articles'
}

export async function generateStaticParams() {
    const articles = await listArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

/* async function getData() {
    const res = await getArticle()
    // The return value is not serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
} */

export default async function ArticlePage({ params }) {
    const { slug } = params;
    return (
        <div className="flex justify-center">
            {slug}
        </div >
    );
}