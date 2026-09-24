import type { Metadata } from "next";
import { PropertyCard } from "@/components/Ui";
import { properties } from "@/lib/data";
export const metadata: Metadata = {title:"Properties | HomeDirect",description:"Example homes listed on HomeDirect."};
export default function Page(){
 return <div className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl text-forest">Properties</h1><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{properties.map(p=><PropertyCard key={p.slug} p={p}/>)}</div></div>;
}
