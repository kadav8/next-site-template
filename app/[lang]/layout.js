import '../globals.css'
import LanguageSelector from './language-selector';

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
      <body>
        <div><LanguageSelector lang={params.lang}></LanguageSelector></div>
        <main>{children}</main>
      </body>
    </html>
  );
}