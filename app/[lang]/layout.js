import '../globals.css'

export async function generateStaticParams() {
  return {params: [{ lang: 'hu' }, { lang: 'en' }], fallback: false};
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