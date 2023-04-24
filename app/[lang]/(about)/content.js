import { dictionary } from '../../../dictionary'
import Image from "next/image";

export default async function AboutContent(params) {
  const t = await dictionary(params.lang)

  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 xl:w-[75rem] my-32">

        <div className="flex flex-row">
          <div className="flex flex-col w-full lg:w-1/2 justify-center">
            <div className="text-5xl xl:text-6xl font-semibold">
              {t['about-page'].title1}
            </div>
            <div className="text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-4">
              {t['about-page'].title2}
            </div>
            <div className="flex text-xl leading-relaxed py-8 sm:w-10/12 lg:w-4/5">
              {t['about-page'].content1}
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative w-[32rem] h-[28rem] xl:w-[36rem] xl:h-[32rem]">
              <Image src="/hero.jpeg" alt="Hero image" fill />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-full lg:w-1/2 justify-center">
            <div className="text-5xl xl:text-6xl font-semibold">
              {t['about-page'].title1}
            </div>
            <div className="text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-4">
              {t['about-page'].title2}
            </div>
            <div className="flex text-xl leading-relaxed py-8 sm:w-10/12 lg:w-4/5">
              {t['about-page'].content1}
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative w-[32rem] h-[28rem] xl:w-[36rem] xl:h-[32rem]">
              <Image src="/hero.jpeg" alt="Hero image" fill />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-full lg:w-1/2 justify-center">
            <div className="text-5xl xl:text-6xl font-semibold">
              {t['about-page'].title1}
            </div>
            <div className="text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-4">
              {t['about-page'].title2}
            </div>
            <div className="flex text-xl leading-relaxed py-8 sm:w-10/12 lg:w-4/5">
              {t['about-page'].content1}
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative w-[32rem] h-[28rem] xl:w-[36rem] xl:h-[32rem]">
              <Image src="/hero.jpeg" alt="Hero image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}