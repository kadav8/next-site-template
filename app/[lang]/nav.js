import Link from 'next/link';
import { dictionary } from '../../dictionary'

export default async function Nav(props) {

    const t = await dictionary(props.lang)

    const about = `/${props.lang}/${t['navigation'].about_url}`
    const mac = `/${props.lang}/${t['navigation'].mac_url}`

    return (
        <nav className="hidden md:flex md:px-32">
            <MenuLink href={`/${props.lang}`} name={t['navigation'].home_title} />
            <MenuLink href={about} name={t['navigation'].about_title} />
            <MenuLink href={mac} name={t['navigation'].mac_title} />
            <MenuLink href={`/${props.lang}/${t['navigation'].blog_url}`} name={t['navigation'].blog_title} />
            <MenuLink href={`/${props.lang}/${t['navigation'].store_url}`} name={t['navigation'].store_title} />
        </nav>
    )
}

export function MenuLink(props) {
    return (
        <div className="py-3 px-5">
            <Link href={props.href} className="hover:text-white hover:cursor-pointer">{props.name}</Link>
        </div>
    )
}