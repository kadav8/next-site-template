import { dictionary } from '../../../dictionary'
import Image from "next/image";


export async function generateStaticParams() {
  return [{ column: 'szorakozas' }, { column: 'film' }];
}

export default async function ColumnContent(params) {
  const { column } = params;
  const t = await dictionary(params.lang)

  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 xl:w-[75rem] my-32">
        {column} ez rovat

      </div>
    </div>
  )
}