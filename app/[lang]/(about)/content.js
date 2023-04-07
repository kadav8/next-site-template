import { dictionary } from '../../../dictionary'

export default async function AboutContent(params) {
   const t = await dictionary(params.lang)
  
   return (
     <div className="flex justify-center">
      <div className="flex flex-col w-[52rem] pt-24 text-gray-600 text-3xl font-serif mb-12">
        {t['about-page'].title}
      </div>
     </div>
   )
  }