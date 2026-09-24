"use client";
import Link from "next/link";
import { useState } from "react";
const links=[["How it works","/#how"],["Pricing","/pricing"],["Services","/services"],["Properties","/properties"]];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-30 border-b border-stone-200 bg-cream/95 backdrop-blur">
  <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
   <Link href="/" className="font-serif text-2xl font-bold text-forest">HomeDirect</Link>
   <ul className="hidden items-center gap-7 text-sm md:flex">{links.map(([l,h])=><li key={h}><Link href={h} className="hover:text-forest">{l}</Link></li>)}
    <li><Link href="/onboarding" className="rounded-full bg-forest px-5 py-2.5 font-semibold text-white">Start selling</Link></li></ul>
   <button className="rounded-lg border border-stone-300 px-3 py-2 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
  </nav>
  {open&&<ul id="mobile-menu" className="space-y-1 border-t border-stone-200 px-5 pb-5 md:hidden">
   {links.map(([l,h])=><li key={h}><Link href={h} onClick={()=>setOpen(false)} className="block py-3">{l}</Link></li>)}
   <li><Link href="/onboarding" onClick={()=>setOpen(false)} className="block rounded-full bg-forest py-3 text-center font-semibold text-white">Start selling</Link></li></ul>}
 </header>;
}
