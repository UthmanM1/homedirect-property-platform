"use client";
import { useRouter } from "next/navigation";
import { Field } from "@/components/Ui";
import { CheckoutSummary } from "@/components/Interactive";
export default function Checkout(){
 const r=useRouter();
 return <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-5"><form onSubmit={e=>{e.preventDefault();r.push("/confirmation");}} className="card space-y-4 p-6 md:col-span-3">
  <h1 className="text-2xl">Payment</h1><p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">Demo checkout. Use card 4242 4242 4242 4242. No payment is processed.</p>
  <Field label="Name on card" required/><Field label="Card number" defaultValue="4242 4242 4242 4242" inputMode="numeric" required/>
  <div className="grid grid-cols-2 gap-4"><Field label="Expiry" placeholder="MM/YY" defaultValue="12/30" required/><Field label="CVC" defaultValue="123" required/></div>
  <Field label="Billing address" required/><Field label="Billing postcode" required/>
  <button className="w-full rounded-full bg-forest py-3 font-semibold text-white">Pay and submit property</button></form>
  <div className="md:col-span-2"><CheckoutSummary/></div></div>;
}
