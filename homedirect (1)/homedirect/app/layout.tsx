import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {title:"HomeDirect | Sell your property your way",description:"A flexible property-selling platform with no percentage commission."};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Providers><Navbar/><main>{children}</main><Footer/></Providers></body></html>;
}
