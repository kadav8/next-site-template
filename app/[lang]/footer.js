import Link from 'next/link';
import { dictionary } from '../../dictionary'
import { MenuLink } from './nav';
export default async function Footer(props) {

    const t = await dictionary(props.lang)

    return (
        <footer className='flex justify-center py-20 bg-gray-500 text-white'>
            <ul className="flex flex-col md:flex-row gap-14 m-2 items-center justify-center text-xs">
                <li>
                    <span className=''>
                        <Link href="/">
                            <span>
                                LOGO
                                {/* <Image
                                    src="/img/logo-inv.png"
                                    alt="logo"
                                    width={150}
                                    height={100}
                                /> */}
                            </span>
                        </Link>
                    </span>
                </li>
                <li className=''>
                    <MenuLink href={`/${props.lang}`} name={t['footer'].home_title} />
                </li>
                <li>
                    <div className='flex gap-14 md:flex-row'>
                        <div className=''>
                            <a target="_blank" href="" aria-label="" >
                                <div>
                                    ICON
                                    {/* <FontAwesomeIcon icon={['fab', 'instagram']} className='w-6 text-white' /> */}
                                </div>
                            </a>
                        </div>
                        <div className=''>
                            <a href="" target="_blank" aria-label="">
                                <div>
                                    ICON
                                    {/* <FontAwesomeIcon icon={['fab', 'facebook']} className='w-6 text-white' /> */}
                                </div>
                            </a>

                        </div>
                        <div className=''>
                            <a href="" target="_blank" aria-label="">
                                <div>
                                    ICON
                                    {/* <FontAwesomeIcon icon={['fab', 'linkedin']} className='w-6 text-white' /> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li className=''>
                    EMAIL
                    {/* <a href="mailto:"></a> */}
                </li>
            </ul>
        </footer >
    );
}