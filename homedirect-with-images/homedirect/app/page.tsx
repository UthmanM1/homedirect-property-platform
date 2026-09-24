import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Ui";
import { PricingGrid } from "@/components/Interactive";
export default function Home(){
 return <>
 <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
  <div><p className="text-sm font-semibold tracking-wide text-sage">PROPERTY SELLING, REIMAGINED</p>
   <h1 className="mt-3 text-5xl leading-tight text-forest md:text-6xl">Sell your property your way.</h1>
   <p className="mt-5 max-w-lg text-lg text-stone-700">Choose how much support you need, pay a simple monthly price and stay in control from listing to completion.</p>
   <div className="mt-8 flex flex-wrap gap-3"><Button href="/onboarding">Start selling</Button><Button href="/pricing" variant="ghost">Explore pricing</Button></div>
   <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-700"><li>✓ No percentage commission</li><li>✓ Flexible support</li><li>✓ Private buyer enquiries</li></ul></div>
  <Link href="/properties/modern-family-home" className="card block overflow-hidden shadow-lg">
   <div className="relative aspect-[3/2] w-full"><Image src="/images/hero.jpg" alt="Brick semi-detached house at sunset with a bay window and black front door" fill priority sizes="(min-width:768px) 560px,100vw" className="object-cover"/></div>
   <div className="p-5"><p className="font-serif text-xl">3 bedroom semi-detached</p><p className="text-sm text-stone-600">Manchester</p><p className="mt-1 text-2xl font-semibold text-forest">£425,000</p></div></Link>
 </section>
 <section id="how" className="bg-white py-20"><div className="mx-auto max-w-6xl px-5"><h2 className="text-3xl text-forest">How it works</h2>
  <ol className="mt-8 grid gap-5 md:grid-cols-3">{[["01","Choose a package","Start DIY or choose more support when you need it."],["02","Build your listing","Add your property, photos, documents and services in one guided flow."],["03","Go live and manage","Track enquiries, services and progress from your seller dashboard."]].map(([n,t,d])=>
   <li key={n} className="card p-6"><span className="text-sm text-sage">{n}</span><h3 className="mt-2 text-xl">{t}</h3><p className="mt-2 text-stone-600">{d}</p></li>)}</ol></div></section>
 <section className="mx-auto max-w-6xl px-5 py-20"><h2 className="mb-8 text-3xl text-forest">Simple monthly pricing</h2><PricingGrid/></section>
 <section className="bg-forest py-20 text-white"><div className="mx-auto max-w-4xl px-5"><h2 className="text-3xl">Case study</h2>
  <dl className="mt-6 space-y-5"><div><dt className="font-semibold text-sage">Problem</dt><dd>Traditional estate-agent commission can make sellers pay a percentage of the final sale price.</dd></div>
  <div><dt className="font-semibold text-sage">Concept</dt><dd>Give sellers more control over what support they purchase.</dd></div>
  <div><dt className="font-semibold text-sage">Product</dt><dd>A flexible property-selling platform combining subscriptions, one-off services, listings, buyer enquiries and seller management.</dd></div>
  <div><dt className="font-semibold text-sage">MVP</dt><dd>Seller onboarding, property listings, buyer enquiries, services, payments, dashboard and a CRM integration concept.</dd></div></dl>
  <div className="mt-8 flex flex-wrap gap-3"><Link href="/dashboard" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest">Open dashboard</Link><Link href="/admin" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">Admin</Link><Link href="/architecture" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">Architecture</Link></div></div></section>
 </>;
}
