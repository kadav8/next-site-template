import ColumnContent from '../../content'

export const dynamicParams = false;

export async function generateStaticParams() {
    return [{ lang: 'hu', column: 'rovat' }];
}

export const metadata = {
    title: 'Site Template - Rovat'
}

export default async function ColumnPage({ params }) {
    return <ColumnContent column={params.column} lang={params.lang} />
}