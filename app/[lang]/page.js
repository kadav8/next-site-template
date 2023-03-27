import { dictionary } from '../../dictionary'
import Link from 'next/link';

export default async function Page({ params: { lang } }) {
  const t = await dictionary(lang)
  
  return (
    <div className="flex flex-col p-8">
      <div className="text-2xl mb-12">{t['hello-message']}</div>
      <Link href={`/${lang}/${t['navigation'].about_url}`} className="text-md">{t['navigation'].about_title}</Link>
    </div>
  )
}