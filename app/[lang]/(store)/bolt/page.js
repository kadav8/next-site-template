import StoreContent from '../content'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'hu', about: 'bolt' }];
}

export const metadata = {
  title: 'Site Template - Bolt'
}

export default async function StorePage({ params }) {  
  return <StoreContent lang={params.lang}/>
}