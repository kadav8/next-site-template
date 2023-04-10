import { dictionary } from '../../../dictionary'
import Image from "next/image";

export default async function AboutContent(params) {
   const t = await dictionary(params.lang)
  
   return (
     <div className="flex flex-col items-center">
      <div className="w-11/12 xl:w-[76rem] my-32">
        
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <div className="text-6xl font-semibold">
              {t['about-page'].title1}
            </div>
            <div className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-4">
              {t['about-page'].title2}
            </div>
            <div className="flex text-xl leading-relaxed py-8 w-4/5">
              {t['about-page'].content1}
            </div>
          </div>

          <div className="flex w-full lg:w-1/2">
            <div className="flex xl:hidden">
                <Image src="/hero.jpeg" alt="Hero image" width={400} height={300}/>
            </div>
            <div className="hidden xl:flex">
                <Image src="/hero.jpeg" alt="Hero image" width={800} height={800}/>
            </div>
          </div>
        </div>
      </div>
     </div>
   )
  }