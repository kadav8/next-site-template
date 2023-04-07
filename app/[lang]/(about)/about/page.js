import AboutContent from '../content'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'en', about: 'about' }];
}

export const metadata = {
  title: 'Site Template - About'
}

export default async function AboutPage({ params }) {  
  return <AboutContent lang={params.lang}/>
}