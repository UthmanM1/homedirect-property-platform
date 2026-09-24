import PropertyDetail from "@/components/PropertyDetail";
import { properties } from "@/lib/data";
export function generateStaticParams(){return properties.map(p=>({slug:p.slug}));}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;return <PropertyDetail slug={slug}/>;
}
