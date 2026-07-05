import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import axios from "axios";

import { useState, useDeferredValue } from "react";

export default function ProductsPage({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(deferredSearchTerm.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
          Our Products
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg italic mb-8">
          Explore our curated collection of premium products, designed just for
          you.
        </p>

        <div className="max-w-xl mx-auto relative group">
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-purple-100 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all shadow-sm hover:shadow-md pr-12 text-gray-700 dark:text-gray-200 font-medium"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Filter:
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white dark:bg-slate-800 border border-purple-50 dark:border-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 outline-none focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 transition-all cursor-pointer hover:bg-purple-50/30 dark:hover:bg-slate-700"
            >
              <option value="all">All Categories</option>
              {products
                .map((p) => p.category)
                .map((cat) => (
                  <option key={cat} value={cat} className="capitalize">
                    {cat}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Sort:
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white dark:bg-slate-800 border border-purple-50 dark:border-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 outline-none focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 transition-all cursor-pointer hover:bg-purple-50/30 dark:hover:bg-slate-700"
            >
              <option value="none">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-50 dark:bg-slate-700 mb-5">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  width={500}
                  height={500}
                />

                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm bg-green-50 dark:bg-green-900/40 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-700">
                  {product.availabilityStatus} ({product.stock})
                </span>

                <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-base font-bold px-3 py-1 rounded-lg shrink-0">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm">
                <span className="text-amber-400">★</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {product.rating}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-xs">
                  ({product.reviews.length} reviews)
                </span>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 min-h-10">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
              <div className="text-xs text-gray-400 max-w-[50%] truncate">
                <span className="font-semibold text-purple-500 block uppercase tracking-wider text-[10px]">
                  {product.brand}
                </span>
                <span className="capitalize dark:text-gray-400">
                  {product.category}
                </span>
              </div>
              <Link
                href={`/products/${product._id}`}
                className="bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 text-white font-medium py-2 px-5 text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700">
          <p className="text-xl font-bold text-gray-400 dark:text-gray-500 mb-2">
            No products found matching &#34;{deferredSearchTerm}&#34;
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-medium italic">
            Try searching for something else!
          </p>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: res.data,
    },
  };
}

ProductsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
