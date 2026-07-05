import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails({ product }) {


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href="/products"
        className="text-purple-600 hover:text-purple-800 mb-8 inline-flex items-center gap-2 font-semibold transition-colors"
      >
        ← Back to products
      </Link>

      <div className="bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
          <div className="bg-gray-50 p-8 flex items-center justify-center">
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
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.reviews?.length || 0} reviews)</span>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="flex items-end gap-4 mb-10">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm line-through font-medium">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="text-4xl font-black text-purple-700">
                  ${product.price}
                </span>
              </div>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10 text-sm border-y border-purple-50 py-6">
              <div>
                <span className="text-gray-400 block mb-1">Availability</span>
                <span className={`font-bold ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                  {product.availabilityStatus} ({product.stock} left)
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Shipping</span>
                <span className="font-bold text-gray-700">{product.shippingInformation}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-700 text-white flex-1 py-4 rounded-2xl font-bold text-lg hover:bg-purple-800 transition-all shadow-lg hover:shadow-purple-200">
                Add to Cart
              </button>
              <button className="border-2 border-purple-100 text-purple-700 px-8 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-all">
                ♥
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">
                {product.returnPolicy} • {product.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  const paths = data.products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

ProductDetails.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
