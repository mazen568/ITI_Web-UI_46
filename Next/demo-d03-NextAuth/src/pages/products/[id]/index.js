import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function ProductDetails({ product }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href="/products"
        className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 inline-flex items-center gap-2 font-semibold transition-colors"
      >
        ← Back to products
      </Link>

      <div className="bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
          <div className="bg-gray-50 dark:bg-slate-700 p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-amber-400"
                        : "text-gray-300 dark:text-slate-600"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                {product.rating}
              </span>
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="flex items-end gap-4 mb-10">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-500 text-sm line-through font-medium">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
                <span className="text-4xl font-black text-purple-700 dark:text-purple-400">
                  ${product.price}
                </span>
              </div>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10 text-sm border-y border-purple-50 dark:border-slate-700 py-6">
              <div>
                <span className="text-gray-400 dark:text-gray-500 block mb-1">Availability</span>
                <span
                  className={`font-bold ${
                    product.stock > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"
                  }`}
                >
                  {product.availabilityStatus} ({product.stock} left)
                </span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block mb-1">Shipping</span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {product.shippingInformation}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-700 dark:bg-purple-600 text-white flex-1 py-4 rounded-2xl font-bold text-lg hover:bg-purple-800 dark:hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-200">
                Add to Cart
              </button>
              <button className="border-2 border-purple-100 dark:border-purple-800 text-purple-700 dark:text-purple-400 px-8 py-4 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
    const res = await axios.get("http://localhost:3000/api/products");
    const products = res.data;

    const paths = products.map((product) => ({
      params: {
        id: product._id.toString(),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);

  return {
    props: {
      product: res.data,
    },
  };
}

ProductDetails.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
