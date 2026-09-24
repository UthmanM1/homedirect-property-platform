import Link from "next/link";
export default function Footer(){
 return <footer className="mt-24 border-t border-stone-200 bg-white"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-stone-600 md:flex-row md:justify-between">
  <p>HomeDirect is a portfolio prototype. No real payments, listings or CRM connections.</p>
  <ul className="flex flex-wrap gap-5">{[["Dashboard","/dashboard"],["Admin","/admin"],["Architecture","/architecture"]].map(([l,h])=><li key={h}><Link href={h} className="hover:text-forest">{l}</Link></li>)}</ul></div></footer>;
}
