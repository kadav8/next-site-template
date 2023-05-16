import { listColumns } from '@/services/planetscale';
import ColumnContent from '../../content';

//export const dynamicParams = false;

export async function generateStaticParams() {
	const columns = await listColumns();
	console.log('columns: ', columns);
	return columns.map(col => ({
		lang: 'hu',
		slug: col.slug,
		id: col.id,
	}));
}

export const metadata = {
	title: 'Site Template - Rovat',
};

export default async function ColumnPage({ params }) {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<ColumnContent column={params.slug} lang={params.lang} />
		</>
	);
}
