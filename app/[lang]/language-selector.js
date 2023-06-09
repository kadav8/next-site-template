'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const HUN = 'HUN';
  const ENG = 'ENG';
  const pathname = usePathname();

  if (pathname === '/en/about') return <Link href="/hu/rolam">{HUN}</Link>
  if (pathname === '/hu/rolam') return <Link href="/en/about">{ENG}</Link>

  if (pathname.startsWith('/en/blog')) return <Link href="/hu/blog">{HUN}</Link>
  if (pathname.startsWith('/hu/blog')) return <Link href="/en/blog">{ENG}</Link>

  if (pathname === '/en/store') return <Link href="/hu/bolt">{HUN}</Link>
  if (pathname === '/hu/bolt') return <Link href="/en/store">{ENG}</Link>

  if (pathname === '/en/column') return <Link href="/hu/rovat">{HUN}</Link>
  if (pathname === '/hu/rovat') return <Link href="/en/column">{ENG}</Link>

  if (pathname === '/en/mac') return <Link href="/hu/mac">{HUN}</Link>
  if (pathname === '/hu/mac') return <Link href="/en/mac">{ENG}</Link>

  if (pathname === '/en') return <Link href="/hu">{HUN}</Link>
  return <Link href="/en">{ENG}</Link>
}