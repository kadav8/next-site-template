import { dictionary } from '../../dictionary'

export default async function Page({ params: { lang } }) {
  const t = await dictionary(lang)
  
  return (
    <div className="text-2xl">
      {t['hello-message']}
    </div>
  )
}