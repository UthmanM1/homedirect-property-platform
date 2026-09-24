"use client";
import Image from "next/image";
import { useState } from "react";
export default function PropertyGallery({images}:{images:{src:string;alt:string}[]}){
 const [i,setI]=useState(0);
 return <div><div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-mist sm:aspect-[16/9]">
  <Image src={images[i].src} alt={images[i].alt} fill priority sizes="(min-width:1152px) 1100px,100vw" className="object-cover"/></div>
  <ul className="mt-2 flex gap-2 overflow-x-auto" aria-label="Property photos">{images.map((m,k)=><li key={m.src} className="shrink-0">
   <button type="button" onClick={()=>setI(k)} aria-label={`Show photo ${k+1} of ${images.length}`} aria-current={k===i} className={`relative block h-16 w-24 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-32 ${k===i?"border-forest":"border-transparent opacity-80 hover:opacity-100"}`}>
    <Image src={m.src} alt="" fill sizes="128px" className="object-cover"/></button></li>)}</ul>
  <p className="mt-2 text-xs text-stone-500">Images are AI-generated and illustrative only.</p></div>;
}
