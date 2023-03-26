import '../globals.css'

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
      <body>{children}</body>
    </html>
  );
}