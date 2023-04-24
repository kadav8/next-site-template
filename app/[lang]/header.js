import { dictionary } from '../../dictionary';
import Menubar from './menubar';

export default async function Header(props) {
   const t = await dictionary(props.lang)

   return (
      <header className='sticky top-0 bottom-0 self-start  w-full z-[1000]'>
         <Menubar lang={props.lang} navigation={t['navigation']}></Menubar>
      </header>
   )
}