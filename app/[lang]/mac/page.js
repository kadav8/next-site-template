import AnimDiv from "@/components/anim-div"
import Image from "next/image";

export const metadata = {
  title: 'Site Template - Mac'
}

export default async function MacPage() {
  return (
    <div className="flex flex-col items-center bg-stone-100">
      <div className="flex flex-col text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-semibold leading-none my-44">
        <TickSvg text="Easy" />
        <TickSvg text="Powerful" />
        <TickSvg text="Amazing" />
        <span className="ml-[32px] sm:ml-[64px] lg:ml-[72px]">
          Mac does <span className="bg-lime-400 px-2 sm:px-5 sm:-mx-2 lg:-mx-5">that.</span>
        </span>
      </div>

      <AnimDiv>
        <div className="flex flex-col md:flex-row w-11/12 xl:w-4/5 text-white">
          <div className="flex flex-col bg-black p-16 lg:p-20 md:w-1/2 xl:w-2/3 md:mx-3 mb-8 rounded-3xl">
            <span className="text-6xl font-extrabold">Intuitive by design.</span>
            <span className="text-lg my-8 xl:w-3/4">Mac is designed to be easy to learn and use — so you can do more than you ever imagined.</span>
            <div className="flex justify-center">
              <Image
                src="/macbook.jpeg"
                alt="Macbook"
                width={800}
                height={800}
                className="mt-8"
              />
            </div>
          </div>
          <div className="flex flex-col bg-black p-16 md:w-1/2 xl:w-1/3 md:mx-3 mb-8 rounded-3xl justify-center">
            <span className="text-6xl font-extrabold">If you love iPhone, <span className="text-lime-400">YOU WILL LOVE MAC.</span></span>
            <span className="text-lg mt-8">You will feel right at home on Mac, with many of the same features and apps as iPhone.</span>
          </div>
        </div>
      </AnimDiv>

      <AnimDiv>
        <div className="flex flex-col md:flex-row w-11/12 xl:w-4/5">
          <div className="flex flex-col bg-white text-black text-4xl xl:text-5xl font-extrabold p-16 xl:p-20 w-full md:w-1/2 md:mx-3 mb-8 rounded-3xl justify-center">
            <span className="py-5">All your things.</span>
            <span className="py-5">All in iCloud.</span>
            <div className="py-5">
              <span className="italic bg-lime-400 p-2">ALL IN SYNC.</span>
            </div>
          </div>
          <div className="flex flex-col bg-black text-white p-16 xl:p-20 w-full md:w-1/2 md:mx-3 mb-8 rounded-3xl justify-center">
            <span className="text-4xl xl:text-6xl font-extrabold">Watch<br />the whole <br /> season on a <br /><span className="text-lime-400">SINGLE <br /> CHARGE.</span></span>
          </div>
        </div>
      </AnimDiv>

      <AnimDiv>
        <div className="flex w-11/12 xl:w-4/5 bg-white rounded-3xl mb-24">
          <div className="flex flex-col text-black p-12 pr-2 pl-0 lg:p-24 lg:pl-0 w-2/3 justify-center">
            <Image
              src="/macbook2.jpg"
              alt="Macbook"
              width={800}
              height={800}
            />
          </div>
          <div className="flex flex-col text-black w-1/3 justify-center">
            <span className="text-2xl lg:text-5xl font-extrabold">Sprint through anything with</span>
            <span className="text-2xl lg:text-6xl font-extrabold text-lime-400 italic py-2">APPLE <br /> SILICON.</span>
          </div>
        </div>
      </AnimDiv>
    </div>
  );
}

function TickSvg(props) {
  return (
    <div className="flex items-center">
      <div className="w-[32px] h-[32px] sm:w-[64px] sm:h-[64px] lg:w-[76px] lg:h-[76px]">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.24000000000000005" />
          <g id="SVGRepo_iconCarrier"><path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#a2e22c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></g>
        </svg>
      </div>
      <span>{props.text}</span>
    </div>
  );
}
