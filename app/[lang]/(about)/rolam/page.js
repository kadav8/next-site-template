import AboutContent from '../content'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'hu', about: 'rolam' }];
}

export const metadata = {
  title: 'Site Template - Rolam'
}

export default async function AboutPage({ params }) {  
  return <AboutContent lang={params.lang}/>
}