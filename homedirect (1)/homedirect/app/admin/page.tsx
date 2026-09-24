"use client";
import { useState } from "react";
import { StatusBadge, Table } from "@/components/Ui";
const S=(s:string)=><StatusBadge key={s+Math.random()} s={s}/>;
const data:Record<string,{head:string[];rows:React.ReactNode[][]}>={
 Properties:{head:["Property","Town","Status"],rows:[["3 bed semi","Manchester",S("Active")],["2 bed apartment","Salford",S("Pending")],["4 bed detached","Stockport",S("Active")]]},
 Sellers:{head:["Seller","Package","Status"],rows:[["John Smith","Plus",S("Active")],["Amira Patel","DIY",S("Pending")],["Tom Reid","Pro",S("Active")]]},
 Enquiries:{head:["Buyer","Property","Status"],rows:[["James Carter","Manchester semi",S("New")],["Sarah Khan","Salford apartment",S("Viewed")]]},
 Services:{head:["Service","Seller","Status"],rows:[["Photography","John Smith",S("Completed")],["EPC","Amira Patel",S("Pending")]]},
 Payments:{head:["Seller","Amount","Status"],rows:[["John Smith","£99",S("Completed")],["Amira Patel","£118",S("Pending")]]},
};
export default function Admin(){
 const [t,setT]=useState("Properties");
 return <div className="mx-auto max-w-6xl px-5 py-12"><h1 className="text-3xl text-forest">Admin (portfolio demo)</h1>
  <div className="my-6 flex flex-wrap gap-2">{Object.keys(data).map(k=><button key={k} onClick={()=>setT(k)} aria-pressed={t===k} className={`rounded-full px-4 py-2 text-sm ${t===k?"bg-forest text-white":"border bg-white"}`}>{k}</button>)}</div>
  <Table head={data[t].head} rows={data[t].rows}/></div>;
}
