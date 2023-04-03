import { dictionary } from '../../dictionary'

export default async function Page({ params: { lang } }) {
  const t = await dictionary(lang)
  
  return (
    <div className="flex flex-col p-8">
      <div className="text-2xl mb-12">{t['hello-message']}</div>
    </div>
  )
}