'use client';

import { dictionary } from '../../dictionary';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageSelector from './language-selector';
import Nav from './nav';


export default async function Header(props) {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const router = useRouter();

   useEffect(() => {
      document.body.style.overflow = showMobileMenu ? 'hidden' : visible;
      console.log('show')
   }, [showMobileMenu]);


   useEffect(() => {
      if (showMobileMenu) {
         document.querySelector('.toggler').checked = false;
         setShowMobileMenu(false);
         console.log('hide')
      }
   }, [router.reload]);

   const pathname = usePathname();
   const t = await dictionary(props.lang)

   let bgColor = "text-indigo-100 bg-indigo-600"
   const about = `/${props.lang}/${t['navigation'].about_url}`
   const mac = `/${props.lang}/${t['navigation'].mac_url}`
   if (pathname === about) bgColor = "text-purple-100 bg-purple-900"
   if (pathname === mac) bgColor = "text-gray-200 bg-gray-800"


   return (
      <header className={`flex text-xs justify-center ${bgColor}`}>
         <div className="flex flex-row w-20 text-start py-3 font-extrabold">
            Temply
         </div>

         <div className='hidden md:flex'><Nav className='' lang={props.lang} mobile={false} /></div>
         {/* <span className={styles.cartIconContainer}>
                    <ion-icon name="bag-outline" onClick={() => setShowPopup(true)}></ion-icon>
                </span> */}


         <div className='flex md:hidden menu-wrap'>
            <input type="checkbox" className='toggler' onChange={e => setShowMobileMenu(!showMobileMenu)} id="hamburger-menu-checkbox" aria-label='hamburger menü' />
            <div className='hamburger'>
               <div>
               </div>
            </div>
         </div>

         <div className="w-20 text-end py-3">
            <span className="border border-white rounded-lg py-1 px-3"><LanguageSelector /></span>
         </div>
      </header>
   )
}