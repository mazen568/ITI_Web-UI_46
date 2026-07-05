import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
        Welcome to <span className="text-purple-600">ITI</span>
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
        Discover our curated collection of premium products, designed to elevate your everyday experience with style and quality.
      </p>
      <div className="flex gap-4">
        <Link href="/products" className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-100">
          Shop Now
        </Link>
        <Link href="/about-us" className="border-2 border-gray-100 text-gray-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all">
          Learn More
        </Link>
      </div>
    </div>
  );
}

Home.getLayout=(page)=>{
  return <Layout>{page}</Layout>
}
