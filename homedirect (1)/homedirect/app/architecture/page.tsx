import type { Metadata } from "next";
export const metadata: Metadata = {title:"Architecture | HomeDirect",description:"Proposed production architecture and integrations."};
const Flow=({items}:{items:string[]})=><ol className="mt-4 space-y-2">{items.map((i,k)=><li key={i} className="card px-4 py-3 text-sm">{k>0&&<span className="mr-2 text-sage">↓</span>}{i}</li>)}</ol>;
export default function Page(){
 return <div className="mx-auto max-w-3xl space-y-12 px-5 py-16"><h1 className="text-4xl text-forest">Designed to work with your existing CRM.</h1>
  <section><h2 className="text-2xl">Proposed Loop CRM integration</h2><p className="mt-2 text-stone-700">Not connected in this prototype. Enquiries would flow like this:</p>
   <Flow items={["Website enquiry","Platform enquiry record","Loop CRM","Internal team","Vendor notification"]}/></section>
  <section><h2 className="text-2xl">Payment architecture</h2><p className="mt-1 text-sm font-semibold text-sage">Production integration concept</p>
   <p className="mt-2 text-stone-700">Stripe is recommended for monthly subscriptions, one-off services, payment confirmations, failed payments, receipts and invoices.</p></section>
  <section><h2 className="text-2xl">Technical architecture</h2><p className="mt-2 text-stone-700">Proposed production stack. This portfolio version uses mock/local data only.</p>
   <Flow items={["Next.js","Application/API layer","PostgreSQL","Stripe","Loop CRM","Email notifications"]}/></section></div>;
}
