import Link from "next/link";
import { ReactNode } from "react";
import { properties, gbp } from "@/lib/data";
export function Button({href,children,variant="primary"}:{href:string;children:ReactNode;variant?:"primary"|"ghost"}){
 const s=variant==="primary"?"bg-forest text-white hover:bg-[#16301f]":"border border-forest text-forest hover:bg-mist";
 return <Link href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${s}`}>{children}</Link>;
}
export function StatusBadge({s}:{s:string}){
 const c:Record<string,string>={Active:"bg-green-100 text-green-900",Completed:"bg-green-100 text-green-900",Pending:"bg-amber-100 text-amber-900",New:"bg-blue-100 text-blue-900"};
 return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${c[s]??"bg-stone-200 text-stone-800"}`}>{s}</span>;
}
export function PropertyCard({p}:{p:typeof properties[number]}){
 return <article className="card overflow-hidden">
  <img src="/house.svg" alt={`${p.title} in ${p.town}`} className="aspect-[16/10] w-full object-cover"/>
  <div className="p-5"><h3 className="text-lg">{p.title}</h3><p className="text-sm text-stone-600">{p.town}, {p.postcode}</p>
  <p className="mt-2 text-xl font-semibold text-forest">{gbp(p.price)}</p>
  <p className="mt-1 text-sm text-stone-600">{p.beds} bed · {p.baths} bath · {p.sqft.toLocaleString()} sq ft</p>
  <div className="mt-4"><Button href={`/properties/${p.slug}`} variant="ghost">View property</Button></div></div></article>;
}
export function Field({label,type="text",...r}:{label:string;type?:string}&React.InputHTMLAttributes<HTMLInputElement>){
 return <label className="block text-sm font-medium">{label}<input type={type} className="input mt-1 font-normal" {...r}/></label>;
}
export function Table({head,rows}:{head:string[];rows:ReactNode[][]}){
 return <div className="card overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-mist"><tr>{head.map(h=><th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
 <tbody>{rows.map((r,i)=><tr key={i} className="border-t border-stone-200">{r.map((c,j)=><td key={j} className="px-4 py-3">{c}</td>)}</tr>)}</tbody></table></div>;
}
