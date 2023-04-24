'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import '../../styles/css/header.css';
import LanguageSelector from "./language-selector";
import MobileMenu from "./mobile-menu";

export default function Menubar(props) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  let bgColor = "text-gray-200 bg-gray-800";
  if (pathname === `/${props.lang}`) bgColor = "text-indigo-200 bg-indigo-600";

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [showMobileMenu]);

  return (
    <>
      <div className={`flex text-xs items-center justify-center ${bgColor}`}>
        <div className="flex flex-row w-full ml-6 md:ml-0 md:w-20 text-start text-white py-3 font-extrabold">
          Temply
        </div>
        <nav className="hidden md:flex px-32">
          <Navigation lang={props.lang} navigation={props.navigation} />
        </nav>

        <div className="flex flex-row justify-end w-20 py-3">
          <span className="border border-white text-white rounded-lg py-1 px-3">
            <LanguageSelector />
          </span>
        </div>

        <div className='menu-wrap md:hidden'>
          <input type="checkbox" className='toggler' onChange={e => setShowMobileMenu(!showMobileMenu)} checked={showMobileMenu} id="hamburger-menu-checkbox" aria-label='hamburger menü' />
          <div className='hamburger'><div>
          </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <MobileMenu bg={bgColor} show={showMobileMenu}>
          <Navigation lang={props.lang} navigation={props.navigation} />
        </MobileMenu>
      </div>
    </>

  );
}

export function Navigation(props) {
  return (
    <>
      <MenuLink href={`/${props.lang}`} name={props.navigation.home_title} />
      <MenuLink href={`/${props.lang}/${props.navigation.about_url}`} name={props.navigation.about_title} />
      <MenuLink href={`/${props.lang}/${props.navigation.mac_url}`} name={props.navigation.mac_title} />
      <MenuLink href={`/${props.lang}/${props.navigation.blog_url}`} name={props.navigation.blog_title} />
      <MenuLink href={`/${props.lang}/${props.navigation.store_url}`} name={props.navigation.store_title} />
    </>
  );
}

export function MenuLink(props) {
  return (
    <div className="py-3 px-5">
      <Link href={props.href} className="hover:text-white hover:cursor-pointer">
        {props.name}
      </Link>
    </div>
  );
}

function BurgerSvg() {
  return (
    <div className="flex items-center">
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
          <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
          <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
        </g>
      </svg>
    </div>
  );
}
