import StoreContent from '../content'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'en', about: 'store' }];
}

export const metadata = {
  title: 'Site Template - Store'
}

export default async function StorePage({ params }) {  
  return <StoreContent lang={params.lang}/>
}