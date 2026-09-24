"use client";
import { useRouter } from "next/navigation";
import { Field } from "@/components/Ui";
export default function Enquiry(){
 const r=useRouter();
 return <div className="mx-auto max-w-2xl px-5 py-12"><form onSubmit={e=>{e.preventDefault();r.push("/enquiry-confirmed");}} className="card space-y-4 p-6">
  <h1 className="text-2xl">Enquire about this property</h1><p className="rounded-lg bg-mist p-3 text-sm">3 Bedroom Semi-Detached House, Manchester, M20 4AB · £425,000</p>
  <Field label="Full name" required/><Field label="Email" type="email" required/><Field label="Telephone" type="tel" required/>
  <label className="block text-sm font-medium">Preferred viewing time<select className="input mt-1 font-normal"><option>Weekday morning</option><option>Weekday evening</option><option>Weekend</option></select></label>
  <label className="block text-sm font-medium">Buyer position<select className="input mt-1 font-normal"><option>First time buyer</option><option>Chain free</option><option>Property to sell</option><option>Investor</option></select></label>
  <label className="block text-sm font-medium">Message<textarea rows={4} className="input mt-1 font-normal"/></label>
  <button className="w-full rounded-full bg-forest py-3 font-semibold text-white">Send enquiry</button></form></div>;
}
