import { dictionary } from '../../dictionary'
import LanguageSelector from './language-selector';
import Link from 'next/link';

export default async function Menubar(props) {
   const t = await dictionary(props.lang)

   return (
      <div className="flex bg-gray-100">
         <div className="flex flex-1 ml-5">
            <MenuLink href={`/${props.lang}`} name={t['navigation'].home_title}/>
            <MenuLink href={`/${props.lang}/${t['navigation'].about_url}`} name={t['navigation'].about_title}/>
         </div>
         <div className="mr-5 p-3">
            <LanguageSelector />
         </div>
      </div>
   )
}

function MenuLink(props) {
   return (
      <div className="p-3">
         <Link href={props.href} className="text-md">{props.name}</Link>
      </div>
   )
 }