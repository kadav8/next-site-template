import Image from "next/image";
import { dictionary } from '../../dictionary'

export default async function Page({ params: { lang } }) {
  const t = await dictionary(lang)
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full h-[34rem] text-white items-center bg-indigo-600 bg-cover	bg-[url('/front.svg')]">
        <span className="pt-24 pb-8 text-5xl font-extrabold uppercase">
          {t['hello-message']}
        </span>
        <span className="w-4/5 lg:w-[40rem] text-center text-lg tracking-wider leading-8">
          Vivamus a malesuada libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin odio nec consequat feugiat. 
          Maecenas pulvinar porttitor mauris ut sollicitudin. Etiam sit amet mi sed quam sagittis eleifend.
        </span>
        <div className="pt-24">
          <button className="mx-3 py-3 px-5 rounded-full bg-white text-black hover:shadow-2xl hover:scale-[1.01]">{t['button1']}</button>
          <button className="mx-3 py-3 px-5 rounded-full bg-black text-white hover:shadow-2xl hover:scale-[1.01]">{t['button2']}</button>
        </div>
      </div>

      <div className="flex flex-row items-center bing-bg rounded-2xl mt-24">
        <div className="flex justify-center items-center w-[10rem] xl:w-[16rem]">
          <div className="relative w-[8rem] h-[8rem] z-10"><Image src="/bing.png" alt="Bing" fill/></div>
        </div>
        <div className="flex flex-col pl-6 pr-8 py-20 w-[22rem] lg:w-[32rem] xl:w-[40rem]">
          <span className="text-2xl xl:text-4xl mb-8">Bemutatjuk az új Binget. Az AI-alapú másodpilóta a weben.</span>
          <span className="text-md xl:text-lg">Az új Bing esetében a válaszok csak a kezdetet jelentik. Tegyen fel valódi kérdéseket. Finomítson a csevegésben. Átfogó válaszokat kaphat. Alakítsa át az ötleteket vázlatokká. Keresse meg a Microsoft Edge-be beépítve, amely az új Bing legjobb böngészője.</span>
        </div>
        <div className="hidden md:flex flex-col w-[15rem] xl:w-[18rem]">
          <button className="p-3 w-[12rem] xl:w-[15rem] rounded-md bg-black text-white">Csatlakozás a várólistához</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row my-24">
        <div className="flex flex-col pt-2 mb-8 lg:mb-0 w-[25rem] xl:w-[32rem]">
          <span className="text-2xl xl:text-4xl">Érj el nagyobb teljesítményt</span>
          <span className="text-md xl:text-lg py-4 lg:py-16 lg:pr-6">A Microsoft Edge ugyanarra a technológiára épül, mint a Chrome, azonban további beépített funkciókkal rendelkezik – mint például az indítási rásegítés és az alvó lapok –, melyek a Windowszal legjobban való működésre optimalizált, világszínvonalú teljesítménnyel és sebességgel teszik jobbá a böngészési élményt.</span>
          <button className="p-3 w-[16rem] rounded-md bg-black text-white">További információk</button>
        </div>
        <div className="flex justify-end w-[32rem] xl:w-[40rem]">
          <div className="relative w-[35rem] h-[25rem]">
            <Image src="/laptop.jpg" alt="Laptop" fill className="rounded-2xl"/>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center bg-stone-100 rounded-2xl mb-24">
        <div className="flex justify-center items-center w-[10rem] xl:w-[16rem]">
          <div className="relative w-[8rem] h-[8rem]"><Image src="/secure-icon.png" alt="Secure" fill/></div>
        </div>
        <div className="flex flex-col pl-6 pr-8 py-20 w-[22rem] lg:w-[32rem] xl:w-[40rem]">
          <span className="text-2xl xl:text-4xl mb-8">Maradj biztonságban online.</span>
          <span className="text-md xl:text-lg">A Microsoft Edge beépített biztonsági és adatvédelmi funkciókkal rendelkezik, mint például a Microsoft Defender SmartScreen, a Jelszófigyelő, az InPrivate-keresés és a Gyermek mód, melyek segítenek megvédeni téged és szeretteidet, és megőrizni az online biztonságotokat.</span>
        </div>
        <div className="hidden md:flex flex-col w-[15rem] xl:w-[18rem]">
          <button className="p-3 w-[12rem] xl:w-[15rem] rounded-md bg-black text-white">További információk</button>
        </div>
      </div>
    </div>
  )
}