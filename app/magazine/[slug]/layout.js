import '../../../styles/globals.css';

//export const dynamicParams = false;

export default function Root({ children, params }) {
  return (
    <html>
      <body className='flex flex-col'>
        <main className='grow'>{children}</main>
      </body>
    </html>
  );
}