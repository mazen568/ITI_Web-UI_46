import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Home({ news }) {

  useEffect(() => {
    // console.log("news", news);

    news.forEach((item, i) => {
      setTimeout(() => toast(`📰 ${item.title}`), i * 1000);
    });
  }, [news]);


  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
        Welcome to <span className="text-purple-600 dark:text-purple-400">ITI</span>
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
        Discover our curated collection of premium products, designed to elevate your everyday experience with style and quality.
      </p>
      <div className="flex gap-4">
        <Link href="/products" className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-purple-700 dark:hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-100">
          Shop Now
        </Link>
        <Link href="/about-us" className="border-2 border-gray-100 dark:border-slate-700 text-gray-600 dark:text-gray-300 px-8 py-3 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
          Learn More
        </Link>
      </div>

    </div>
  );
}

export async function getServerSideProps() {

  const res = await axios.get("http://localhost:3000/api/news");
  return {
    props: {
      news:res.data
    },
  };
}



Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
