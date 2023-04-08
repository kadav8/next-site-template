import { dictionary } from '../../dictionary'
import LanguageSelector from './language-selector';
import Link from 'next/link';

export default async function Menubar(props) {
   const t = await dictionary(props.lang)

   return (
      <div className="flex bg-indigo-600 text-indigo-100 text-xs justify-center">
         <div className="flex flex-row w-20 text-white text-start py-3 font-extrabold">
            Temply
         </div>
         <div className="hidden md:flex md:px-32">
            <MenuLink href={`/${props.lang}`} name={t['navigation'].home_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].about_url}`} name={t['navigation'].about_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].blog_url}`} name={t['navigation'].blog_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].store_url}`} name={t['navigation'].store_title}/>
         </div>
         <div className="w-20 text-white text-end py-3">
            <span className="border border-white rounded-lg py-1 px-3"><LanguageSelector/></span>
         </div>
      </div>
   )
}

function MenuLink(props) {
   return (
      <div className="py-3 px-5">
         <Link href={props.href} className="hover:text-white hover:cursor-pointer">{props.name}</Link>
      </div>
   )
 }