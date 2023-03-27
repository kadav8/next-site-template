import { dictionary } from '../../../dictionary'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ about: 'about' }, { about: 'rolam' }];
}

export const metadata = {
  title: 'Site Template - About'
}

export default async function AboutPage({ params }) {
  const t = await dictionary(params.lang)
  
  return (
    <div className="p-8 text-2xl">
      {t['about-page'].title}
    </div>
  )
}