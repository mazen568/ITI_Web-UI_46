import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function AdminProductsPage({ products }) {
  const [productList, setProductList] = useState(products);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = async () => {
    await axios.delete(`/api/products/${deleteId}`);
    setProductList(prev => prev.filter(p => p._id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-bold dark:text-white mb-2">Delete Product?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteId(null)}
                className="px-5 py-2 rounded-lg border dark:border-slate-600 font-medium hover:bg-gray-50 dark:hover:bg-slate-700 dark:text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your product inventory and details.</p>
        </div>
        <Link href="/admin/products/create" className="bg-purple-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-purple-700 dark:hover:bg-purple-500 transition-all  flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          Add New Product
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
              {productList.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden border border-gray-100 dark:border-slate-600 shrink-0">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1"
                          unoptimized
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{product.title}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">ID: #{product._id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 capitalize border border-purple-100 dark:border-purple-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{product.stock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-black text-gray-900 dark:text-white">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/products/edit/${product._id}`} className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </Link>
                      <button
                        onClick={() => setDeleteId(product._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: res.data,
    },
  };
}

AdminProductsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};