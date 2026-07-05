import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function ProductsPage({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Our Products</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
          Explore our curated collection of premium products, designed just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-50 mb-5">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  width={500}
                  height={500}
                />


                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm bg-green-50 text-green-600 border border-green-100">
                  {product.availabilityStatus} ({product.stock})
                </span>

                <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <span className="bg-purple-50 text-purple-700 text-base font-bold px-3 py-1 rounded-lg shrink-0">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm">
                <span className="text-amber-400">★</span>
                <span className="font-semibold text-gray-700">{product.rating}</span>
                <span className="text-gray-400 text-xs">({product.reviews.length} reviews)</span>
              </div>

              <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-10">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
              <div className="text-xs text-gray-400 max-w-[50%] truncate">
                <span className="font-semibold text-purple-500 block uppercase tracking-wider text-[10px]">
                  {product.brand}
                </span>
                <span className="capitalize">{product.category}</span>
              </div>
              <Link
                href={`/products/${product.id}`}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-5 text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json();

  return {
    props: {
      products: data.products
    }
  }
}



ProductsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}