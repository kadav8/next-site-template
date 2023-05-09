import ColumnContent from '../../content'

export const dynamicParams = false;

export async function generateStaticParams() {
    return [{ lang: 'en', column: 'column' }];
}

export const metadata = {
    title: 'Site Template - Column'
}

export default async function ColumnPage({ params }) {
    return <ColumnContent column={params.column} lang={params.lang} />
}