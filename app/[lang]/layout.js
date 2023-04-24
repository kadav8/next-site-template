import '../../styles/globals.css'
import Header from './header';
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
      <body className='flex flex-col'>
        <Header lang={params.lang} />
        <main className='grow'>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}