import { listColumns } from '@/services/planetscale';
import ColumnContent from '../../content';

//export const dynamicParams = false;

export async function generateStaticParams() {
	const columns = await listColumns();
	return columns.map(col => ({
		lang: 'en',
		slug: col.slug,
		id: col.id,
	}));
}

export const metadata = {
	title: 'Site Template - Column',
};

export default async function ColumnPage({ params }) {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<ColumnContent column={params.slug} lang={params.lang} />
		</>
	);
}
