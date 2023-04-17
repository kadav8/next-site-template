import Link from "next/link";
import { dictionary } from "../../dictionary";

export default async function Footer(props) {
  const t = await dictionary(props.lang);

  return (
    <footer className="flex justify-center py-20 bg-gray-800 text-gray-200">
      <ul className="flex flex-col md:flex-row gap-14 m-2 items-center justify-center text-xs">
        <li>
          <span className="">
            <Link href="/">
              <span>LOGO</span>
            </Link>
          </span>
        </li>
        <li className="">
          <div className="py-3 px-5">
            <Link
              href={`/${props.lang}`}
              className="cursor-pointer hover:underline"
            >
              {t["footer"].home_title}
            </Link>
          </div>
        </li>
        <li>
          <div className="flex gap-14 md:flex-row">
            <div className="">
              <a target="_blank" href="" aria-label="">
                <div>ICON</div>
              </a>
            </div>
            <div className="">
              <a href="" target="_blank" aria-label="">
                <div>ICON</div>
              </a>
            </div>
            <div className="">
              <a href="" target="_blank" aria-label="">
                <div>ICON</div>
              </a>
            </div>
          </div>
        </li>
        <li className="">EMAIL</li>
      </ul>
    </footer>
  );
}
