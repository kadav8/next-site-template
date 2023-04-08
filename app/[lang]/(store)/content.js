import { dictionary } from '../../../dictionary'

export default async function StoreContent(params) {
   const t = await dictionary(params.lang)
  
   return (
     <div className="flex flex-col items-center">
      <div className="w-4/5 lg:w-[60rem] my-16">
        <div className="text-gray-600 text-4xl font-serif mb-12">
          {t['store-page'].title}
        </div>
      </div>
     </div>
   )
  }