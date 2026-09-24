"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { packages, gbp } from "@/lib/data";
import { Field } from "@/components/Ui";
import { useSeller } from "@/components/Providers";
import { ServicePicker, CheckoutSummary, useTotals } from "@/components/Interactive";
const steps=["Account","Property","Documents","Services","Review"];
export default function Onboarding(){
 const [n,setN]=useState(0);const router=useRouter();const {pkg,setPkg}=useSeller();const {p,oneOff}=useTotals();
 const [files,setFiles]=useState<Record<string,string>>({});
 const next=(e:React.FormEvent)=>{e.preventDefault();n<4?setN(n+1):router.push("/checkout");};
 const up=(k:string)=>(e:React.ChangeEvent<HTMLInputElement>)=>setFiles(f=>({...f,[k]:Array.from(e.target.files??[]).map(x=>x.name).join(", ")}));
 return <div className="mx-auto max-w-3xl px-5 py-12"><h1 className="text-3xl text-forest">Sell your property</h1>
  <ol className="my-6 flex flex-wrap gap-2 text-xs">{steps.map((s,i)=><li key={s} aria-current={i===n?"step":undefined} className={`rounded-full px-3 py-1 ${i===n?"bg-forest text-white":i<n?"bg-mist":"bg-white border"}`}>{i+1}. {s}</li>)}</ol>
  <form onSubmit={next} className="card space-y-5 p-6">
   {n===0&&<><Field label="Full name" required autoComplete="name"/><Field label="Email" type="email" required autoComplete="email"/><Field label="Password" type="password" required minLength={8}/>
    <fieldset><legend className="text-sm font-medium">Package</legend><div className="mt-2 grid gap-2 sm:grid-cols-3">{packages.map(x=><label key={x.id} className={`cursor-pointer rounded-xl border p-3 text-sm ${pkg===x.id?"border-2 border-forest bg-mist":""}`}><input type="radio" name="pkg" className="mr-2" checked={pkg===x.id} onChange={()=>setPkg(x.id)}/>{x.name} · £{x.price}/mo</label>)}</div></fieldset></>}
   {n===1&&<><label className="block text-sm font-medium">Property type<select className="input mt-1 font-normal"><option>Detached</option><option>Semi-detached</option><option>Terraced</option><option>Flat / apartment</option></select></label>
    <div className="grid gap-4 sm:grid-cols-3"><Field label="Asking price (£)" type="number" required/><Field label="Bedrooms" type="number" min={0} required/><Field label="Bathrooms" type="number" min={0} required/></div>
    <div className="grid gap-4 sm:grid-cols-2"><Field label="Postcode" required/><Field label="Address" required/></div>
    <label className="block text-sm font-medium">Property description<textarea rows={4} className="input mt-1 font-normal"/></label></>}
   {n===2&&["Property photos","Floorplan","EPC"].map(k=><label key={k} className="block rounded-xl border-2 border-dashed border-sage p-5 text-sm font-medium">{k}
    <input type="file" multiple={k==="Property photos"} onChange={up(k)} className="mt-2 block w-full font-normal"/><span className="mt-1 block font-normal text-stone-600">{files[k]?`Selected: ${files[k]}`:"Nothing selected (demo only, files are not uploaded)"}</span></label>)}
   {n===3&&<ServicePicker showTotal/>}
   {n===4&&<><CheckoutSummary/><p className="text-sm text-stone-600">Demo only: no real payment is taken.</p></>}
   <div className="flex justify-between">{n>0?<button type="button" onClick={()=>setN(n-1)} className="rounded-full border px-6 py-3 text-sm">Back</button>:<span/>}
    <button className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white">{n===4?"Continue to payment":"Continue"}</button></div>
  </form><p className="mt-3 text-sm text-stone-600">Today: {gbp(p.price+oneOff)} · then {gbp(p.price)}/month</p></div>;
}
