import { dictionary } from '../../dictionary'

export default async function Page({ params: { lang } }) {
  const t = await dictionary(lang)
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[36rem] text-white items-center bg-indigo-600 bg-cover	bg-[url('/front.svg')]">
        <span className="pt-24 pb-8 text-5xl font-extrabold uppercase">
          {t['hello-message']}
        </span>
        <span className="w-4/5 lg:w-[40rem] text-center text-lg tracking-wider leading-8">
          Vivamus a malesuada libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin odio nec consequat feugiat. 
          Maecenas pulvinar porttitor mauris ut sollicitudin. Etiam sit amet mi sed quam sagittis eleifend.
        </span>
        <div className="pt-12">
          <button className="mx-4 py-3 px-5 rounded-full bg-white text-black hover:shadow-2xl hover:scale-[1.01]">{t['button1']}</button>
          <button className="mx-4 py-3 px-5 rounded-full bg-black text-white hover:shadow-2xl hover:scale-[1.01]">{t['button2']}</button>
        </div>
      </div>

      <div className="flex flex-col h-[32rem] p-16 md:p-32">
        <span className="w-4/5 lg:w-96 font-semibold text-2xl">
          Vivamus a malesuada libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      <div className="flex flex-col h-[32rem] p-16 md:p-32 bg-stone-50">
        <span className="w-4/5 lg:w-96 font-semibold text-2xl">
          Vivamus a malesuada libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      <div className="flex flex-col h-[32rem] p-16 md:p-32">
        <span className="w-4/5 lg:w-96 font-semibold text-2xl">
          Vivamus a malesuada libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
    </div>
  )
}