"use client";
import { useState } from "react";
import { enquiries, services, gbp } from "@/lib/data";
import { StatusBadge, Table } from "@/components/Ui";
const tabs=["Overview","My property","Enquiries","Services","Payments","Account"];
const pay=[["12 Sep 2026","Plus package","£99"],["12 Aug 2026","Plus package","£99"],["12 Aug 2026","Professional Photography","£149"]];
export default function Dashboard(){
 const [t,setT]=useState("Overview");
 const enq=<Table head={["Buyer","Property","Status"]} rows={enquiries.map(e=>[e.name,e.property,<StatusBadge key={e.name} s={e.status}/>])}/>;
 return <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-[200px_1fr]">
  <nav aria-label="Dashboard" className="flex gap-2 overflow-x-auto md:flex-col">{tabs.map(x=><button key={x} onClick={()=>setT(x)} aria-current={t===x} className={`whitespace-nowrap rounded-lg px-4 py-2 text-left text-sm ${t===x?"bg-forest text-white":"bg-white border"}`}>{x}</button>)}</nav>
  <section className="space-y-6"><h1 className="text-3xl text-forest">{t==="Overview"?"Good morning, John.":t}</h1>
  {t==="Overview"&&<><div className="grid gap-4 sm:grid-cols-3">{[["Listing views","1,284"],["Buyer enquiries","14"],["Current package","Plus"]].map(([a,b])=><div key={a} className="card p-5"><p className="text-sm text-stone-600">{a}</p><p className="text-3xl font-semibold text-forest">{b}</p></div>)}</div>
   <div className="card flex items-center justify-between p-5"><div><p className="font-serif text-lg">3 bedroom semi-detached</p><p className="text-sm text-stone-600">Manchester · £425,000</p></div><StatusBadge s="Active"/></div>{enq}</>}
  {t==="My property"&&<div className="card p-5"><p>3 bedroom semi-detached, Manchester, M20 4AB</p><p className="mt-1 font-semibold">{gbp(425000)}</p><p className="mt-3 text-sm">Listing status: <StatusBadge s="Active"/></p></div>}
  {t==="Enquiries"&&enq}
  {t==="Services"&&<Table head={["Service","Price","Status"]} rows={services.slice(0,3).map((s,i)=>[s.name,gbp(s.price),<StatusBadge key={s.id} s={i===0?"Completed":"Pending"}/>])}/>}
  {t==="Payments"&&<Table head={["Date","Item","Amount"]} rows={pay}/>}
  {t==="Account"&&<div className="card p-5 text-sm"><p>John Smith</p><p className="text-stone-600">john@example.com · Plus, £99/month</p></div>}</section></div>;
}
