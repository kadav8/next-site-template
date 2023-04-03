'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const pathname = usePathname();

  if(pathname == '/en/about') return <Link href="/hu/rolam">HUN</Link>
  if(pathname == '/hu/rolam') return <Link href="/en/about">ENG</Link>

  if(pathname == '/en') return <Link href="/hu">HUN</Link>
  return <Link href="/en">ENG</Link>
 }