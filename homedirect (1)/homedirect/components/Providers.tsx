"use client";
import { createContext, useContext, useState, ReactNode } from "react";
type Ctx={pkg:string;setPkg:(p:string)=>void;svc:string[];toggle:(id:string)=>void};
const C=createContext<Ctx>({pkg:"plus",setPkg:()=>{},svc:[],toggle:()=>{}});
export const useSeller=()=>useContext(C);
export default function Providers({children}:{children:ReactNode}){
 const [pkg,setPkg]=useState("plus");const [svc,setSvc]=useState<string[]>([]);
 const toggle=(id:string)=>setSvc(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);
 return <C.Provider value={{pkg,setPkg,svc,toggle}}>{children}</C.Provider>;
}
