import { properties, gbp } from "@/lib/data";
import { Button } from "@/components/Ui";
import PropertyGallery from "@/components/PropertyGallery";
export default function PropertyDetail({slug}:{slug:string}){
 const p=properties.find(x=>x.slug===slug)??properties[0];
 return <div className="mx-auto max-w-6xl px-5 py-12">
  <PropertyGallery images={p.images}/>
  <div className="mt-8 grid gap-10 lg:grid-cols-3"><div className="space-y-8 lg:col-span-2">
   <div><h1 className="text-3xl text-forest">{p.title}</h1><p className="text-stone-600">{p.town}, {p.postcode}</p><p className="mt-2 text-3xl font-semibold">{gbp(p.price)}</p>
    <p className="mt-2">{p.beds} bedrooms · {p.baths} bathrooms · {p.sqft.toLocaleString()} sq ft</p></div>
   <section><h2 className="text-xl">Key features</h2><ul className="mt-2 list-disc pl-5 text-stone-700"><li>South-facing garden</li><li>Off-street parking</li><li>Recently fitted kitchen</li></ul></section>
   <section><h2 className="text-xl">Description</h2><p className="mt-2 text-stone-700">A bright, well-kept family home close to schools and transport links. Sample description for the portfolio demo.</p></section>
   <section><h2 className="text-xl">Floorplan</h2><p className="card mt-2 p-4 text-stone-600">Floorplan preview (demo placeholder)</p></section>
   <section><h2 className="text-xl">EPC</h2><p className="card mt-2 p-4 text-stone-600">Energy rating C (demo placeholder)</p></section>
   <section><h2 className="text-xl">Location</h2><p className="mt-2 text-stone-700">{p.town}, {p.postcode}. Map placeholder; no external map is loaded.</p></section></div>
  <aside className="card h-fit p-6"><h2 className="text-xl">Viewing information</h2><p className="mt-2 text-sm text-stone-600">Viewings are arranged through HomeDirect. The seller&apos;s contact details are kept private.</p><div className="mt-4"><Button href="/enquiry">Enquire about this property</Button></div></aside></div></div>;
}
