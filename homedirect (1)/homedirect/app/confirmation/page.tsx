import { Button } from "@/components/Ui";
export default function Page(){
 return <div className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="text-3xl text-forest">Payment successful</h1><p className="mt-3 text-stone-700">Your property has been submitted for review. This is a demo: no payment was taken and nothing was saved.</p><div className="mt-6"><Button href="/dashboard">Open dashboard</Button></div></div>;
}
