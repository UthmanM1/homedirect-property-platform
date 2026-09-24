import type { Metadata } from "next";
import { PricingGrid } from "@/components/Interactive";
export const metadata: Metadata = {title:"Pricing | HomeDirect",description:"Three monthly packages with no percentage commission."};
export default function Page(){
 return <div className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl text-forest">Pricing</h1><p className="mb-8 mt-2 text-stone-700">No percentage commission. Choose the level of help you need.</p><PricingGrid/></div>;
}
