import { dictionary } from '../../../dictionary'
import Image from 'next/image'

export default async function AboutContent(params) {
   const t = await dictionary(params.lang)
  
   return (
     <div className="flex flex-col items-center text-gray-600 leading-relaxed tracking-wide">
      <div className="w-4/5 lg:w-[60rem] my-16">
        <div className=" text-4xl font-serif mb-12">
          {t['about-page'].title}
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex lg:w-1/2 text-md font-light">
            {t['about-page'].content1}
          </div>
          <div className="flex items-center justify-center mt-6 lg:mt-0 lg:w-1/2 lg:-translate-y-3 opacity-95">
            <Image
              src="/mario.png"
              alt="Mario"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-900 text-4xl font-serif font-semibold my-20">
          <span className="flex w-4/5 lg:w-2/3 text-center">{t['about-page'].subtitle}</span>
        </div>
        <div className="text-md font-light mt-2 lg:mt-8">
          {t['about-page'].content2}
        </div>
        <div className="flex justify-center my-24 opacity-95">
          <Image
            src="/mario2.png"
            alt="Mario2"
            width={600}
            height={600}
            className="rotate-6 rounded-lg"
          />
        </div>
        <div className="text-md font-light">
          {t['about-page'].content3}
        </div>
      </div>
     </div>
   )
  }