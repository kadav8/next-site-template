import '../globals.css'
import Menubar from './menubar';

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
        <Menubar lang={params.lang} segment={children.props.childProp.segment} />
        <main>{children}</main>
      </body>
    </html>
  );
}