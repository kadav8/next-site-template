'use client';

import { dictionary } from '../../dictionary'
import LanguageSelector from './language-selector';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default async function Menubar(props) {
   const pathname = usePathname();
   const t = await dictionary(props.lang)

   const about = `/${props.lang}/${t['navigation'].about_url}`
   const mac = `/${props.lang}/${t['navigation'].mac_url}`

   let bgColor = "text-indigo-100 bg-indigo-600"
   if (pathname === about) bgColor = "text-purple-100 bg-purple-900"
   if (pathname === mac) bgColor = "text-gray-200 bg-gray-800"

   return (
      <div className={`flex text-xs justify-center ${bgColor}`}>
         <div className="flex flex-row w-20 text-start py-3 font-extrabold">
            Temply
         </div>
         <div className="hidden md:flex md:px-32">
            <MenuLink href={`/${props.lang}`} name={t['navigation'].home_title} />
            <MenuLink href={about} name={t['navigation'].about_title} />
            <MenuLink href={mac} name={t['navigation'].mac_title} />
            <MenuLink href={`/${props.lang}/${t['navigation'].blog_url}`} name={t['navigation'].blog_title} />
            <MenuLink href={`/${props.lang}/${t['navigation'].store_url}`} name={t['navigation'].store_title} />
         </div>
         <div className="w-20  text-end py-3">
            <span className="border border-white rounded-lg py-1 px-3"><LanguageSelector /></span>
         </div>
      </div>
   )
}

export function MenuLink(props) {
   return (
      <div className="py-3 px-5">
         <Link href={props.href} className="hover:text-white hover:cursor-pointer">{props.name}</Link>
      </div>
   )
}