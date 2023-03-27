export default async function LanguageSelector({ lang }) {
   return (
     <div className="text-sm p-8">
       {lang === 'hu' ? 'ENG' : 'HUN'}
     </div>
   )
 }