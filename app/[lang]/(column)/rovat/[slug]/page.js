import ColumnContent from '../../content'

export const dynamicParams = false;

export async function generateStaticParams() {
    return [{ lang: 'hu', column: 'rovat', slug: 'film' }];
}

export const metadata = {
    title: 'Site Template - Rovat'
}

export default async function ColumnPage({ params }) {
    return <ColumnContent column={params.slug} lang={params.lang} />
}