import { dictionary } from '../../dictionary';
import Menubar from './menubar';

export default async function Header(props) {
   const t = await dictionary(props.lang)

   return (
      <header>
         <Menubar lang={props.lang} navigation={t['navigation']}></Menubar>
      </header>
   )
}