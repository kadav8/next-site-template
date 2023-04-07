import { dictionary } from '../../dictionary'
import LanguageSelector from './language-selector';
import Link from 'next/link';

export default async function Menubar(props) {
   const t = await dictionary(props.lang)

   return (
      <div className="flex bg-indigo-600 text-white justify-center">
         <div className="w-20 text-start py-4 font-extrabold">
            Template
         </div>
         <div className="hidden md:flex md:px-32 lg:px-72">
            <MenuLink href={`/${props.lang}`} name={t['navigation'].home_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].about_url}`} name={t['navigation'].about_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].blog_url}`} name={t['navigation'].blog_title}/>
         </div>
         <div className="w-20 text-end py-4">
            <span className="border border-white rounded-lg py-1 px-3 text-xs"><LanguageSelector/></span>
         </div>
      </div>
   )
}

function MenuLink(props) {
   return (
      <div className="py-4 px-5">
         <Link href={props.href} className="text-sm font-semibold hover:underline hover:cursor-pointer">{props.name}</Link>
      </div>
   )
 }