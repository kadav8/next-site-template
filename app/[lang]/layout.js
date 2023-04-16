import '../globals.css'
import Menubar from './menubar';
import Footer from './footer';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'hu' }, { lang: 'en' }];
}

export const metadata = {
  title: 'Site Template',
  description: 'Best site template ever',
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className='flex flex-col min-h-screen'>
        <Menubar lang={params.lang} segment={children.props.childProp.segment} />
        <main className='grow'>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}