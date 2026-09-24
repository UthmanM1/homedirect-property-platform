import type { Metadata } from "next";
import { ServicePicker } from "@/components/Interactive";
import { Button } from "@/components/Ui";
export const metadata: Metadata = {title:"Services | HomeDirect",description:"Add one-off services to your listing when you need them."};
export default function Page(){
 return <div className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl text-forest">Services</h1><p className="mb-8 mt-2 text-stone-700">Add one-off help only when you need it.</p><ServicePicker showTotal/><div className="mt-8"><Button href="/onboarding">Continue with these services</Button></div></div>;
}
