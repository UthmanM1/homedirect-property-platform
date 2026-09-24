"use client";
import Link from "next/link";
import { packages, services, gbp } from "@/lib/data";
import { useSeller } from "./Providers";
export function PricingGrid(){
 const {pkg,setPkg}=useSeller();
 return <div className="grid gap-5 md:grid-cols-3">{packages.map(p=>
  <div key={p.id} className={`card flex flex-col p-6 ${p.id==="plus"?"border-2 border-forest":""}`}>
   <h3 className="text-2xl">{p.name}</h3><p className="text-sm text-stone-600">{p.tag}</p>
   <p className="mt-4 text-4xl font-semibold text-forest">£{p.price}<span className="text-base font-normal text-stone-600">/month</span></p>
   <ul className="my-5 flex-1 space-y-2 text-sm">{p.features.map(f=><li key={f}>✓ {f}</li>)}</ul>
   <Link href="/onboarding" onClick={()=>setPkg(p.id)} className="rounded-full bg-forest py-3 text-center text-sm font-semibold text-white">Choose {p.name}</Link>
  </div>)}</div>;
}
export function ServicePicker({showTotal=false}:{showTotal?:boolean}){
 const {svc,toggle}=useSeller();
 const total=services.filter(s=>svc.includes(s.id)).reduce((a,s)=>a+s.price,0);
 return <div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(s=>{const on=svc.includes(s.id);return(
  <button key={s.id} type="button" aria-pressed={on} onClick={()=>toggle(s.id)} className={`card p-5 text-left transition ${on?"border-2 border-forest bg-mist":""}`}>
   <span className="flex justify-between"><span className="font-semibold">{s.name}</span><span className="text-forest">{gbp(s.price)}</span></span>
   <span className="mt-2 block text-sm text-stone-600">{s.desc}</span><span className="mt-3 block text-sm font-medium">{on?"Selected ✓ (tap to remove)":"Add to my plan"}</span></button>);})}</div>
  {showTotal&&<p className="mt-6 text-lg">Selected services: <strong>{gbp(total)}</strong> one-off</p>}</div>;
}
export function useTotals(){
 const {pkg,svc}=useSeller();
 const p=packages.find(x=>x.id===pkg)!;const sel=services.filter(s=>svc.includes(s.id));
 const oneOff=sel.reduce((a,s)=>a+s.price,0);
 return {p,sel,oneOff,today:p.price+oneOff};
}
export function CheckoutSummary(){
 const {p,sel,oneOff,today}=useTotals();
 return <aside className="card p-6" aria-label="Order summary"><h2 className="text-xl">Order summary</h2>
  <dl className="mt-4 space-y-2 text-sm"><div className="flex justify-between"><dt>{p.name} package (monthly)</dt><dd>{gbp(p.price)}</dd></div>
  {sel.map(s=><div key={s.id} className="flex justify-between"><dt>{s.name}</dt><dd>{gbp(s.price)}</dd></div>)}
  <div className="flex justify-between border-t pt-2"><dt>One-off services</dt><dd>{gbp(oneOff)}</dd></div>
  <div className="flex justify-between text-base font-semibold"><dt>Total today</dt><dd>{gbp(today)}</dd></div>
  <div className="flex justify-between text-stone-600"><dt>Then monthly</dt><dd>{gbp(p.price)}/month</dd></div></dl></aside>;
}
