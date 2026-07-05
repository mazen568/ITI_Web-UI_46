import Layout from "@/components/Layout";
import { useActionState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import { validateProduct } from "../../../../utils/productValidation";

const initialState = {
  error: "",
  fields: {},
  fieldErrors: {},
};

export default function CreateProduct() {
  const router = useRouter();

  const createProductAction = async (prevState, formData) => {
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      thumbnail: formData.get("thumbnail"),
      stock: Number(formData.get("stock")),
      brand: formData.get("brand"),
      category: formData.get("category"),
    };

    const fieldErrors = validateProduct(data);

    if (Object.keys(fieldErrors).length > 0) {
      return {
        error: "validation failed",
        fields:data,
        fieldErrors,
      };
    }

    try {
      const res = await axios.post("http://localhost:3000/api/products", data);

      if (res.status === 201) {
        toast.success("product created successfully");
        router.push("/admin/products");
        return { error: "", fields: data, fieldErrors: {} };
      }

      return { error: "failed to create product", fieldErrors: {} };
    } catch (error) {
      return { error: "server error", fields: data, fieldErrors: {} };
    }
  };

  const [state, formAction, pending] = useActionState(
    createProductAction,
    initialState
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
          Add New Product
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Fill in the details to expand your catalog.
        </p>
      </div>

      <form
        action={formAction}
        className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Product Title
            </label>
            <input
              name="title"
              placeholder="e.g. iPhone 15 Pro"
              defaultValue={state.fields.title}
              className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
                state.fieldErrors?.title ? "border-red-400" : "border-gray-100 dark:border-slate-600"
              }`}
            />
            {state.fieldErrors?.title && (
              <p className="text-red-500 text-xs">{state.fieldErrors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Category
            </label>
            <input
              name="category"
              placeholder="e.g. smartphones"
              defaultValue={state.fields.category}
              className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
                state.fieldErrors?.category
                  ? "border-red-400"
                  : "border-gray-100 dark:border-slate-600"
              }`}
            />
            {state.fieldErrors?.category && (
              <p className="text-red-500 text-xs">
                {state.fieldErrors.category}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              defaultValue={state.fields.price}
              placeholder="0.00"
              className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
                state.fieldErrors?.price ? "border-red-400" : "border-gray-100 dark:border-slate-600"
              }`}
            />
            {state.fieldErrors?.price && (
              <p className="text-red-500 text-xs">{state.fieldErrors.price}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Stock Level
            </label>
            <input
              type="number"
              name="stock"
              defaultValue={state.fields.stock}
              placeholder="0"
              className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
                state.fieldErrors?.stock ? "border-red-400" : "border-gray-100 dark:border-slate-600"
              }`}
            />
            {state.fieldErrors?.stock && (
              <p className="text-red-500 text-xs">{state.fieldErrors.stock}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Brand
          </label>
          <input
            name="brand"
            defaultValue={state.fields.brand}
            placeholder="e.g. Apple"
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
              state.fieldErrors?.brand ? "border-red-400" : "border-gray-100 dark:border-slate-600"
            }`}
          />
          {state.fieldErrors?.brand && (
            <p className="text-red-500 text-xs">{state.fieldErrors.brand}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Thumbnail URL
          </label>
          <input
            name="thumbnail"
            defaultValue={state.fields.thumbnail}
            placeholder="https://example.com/image.png"
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all ${
              state.fieldErrors?.thumbnail
                ? "border-red-400"
                : "border-gray-100 dark:border-slate-600"
            }`}
          />
          {state.fieldErrors?.thumbnail && (
            <p className="text-red-500 text-xs">
              {state.fieldErrors.thumbnail}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={state.fields.description}
            rows="4"
            placeholder="Tell us about this product..."
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-700 dark:text-gray-100 focus:ring-2 focus:ring-purple-600 outline-none transition-all resize-none ${
              state.fieldErrors?.description
                ? "border-red-400"
                : "border-gray-100 dark:border-slate-600"
            }`}
          />
          {state.fieldErrors?.description && (
            <p className="text-red-500 text-xs">
              {state.fieldErrors.description}
            </p>
          )}
        </div>

        {state.error && state.error !== "validation failed" && (
          <p className="text-red-500 text-sm">{state.error}</p>
        )}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={pending}
            className="flex-1 bg-purple-600 text-white font-black py-4 rounded-2xl hover:bg-purple-700 dark:hover:bg-purple-500 transition-all disabled:opacity-50"
          >
            {pending ? "Creating..." : "Create Product"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="px-8 py-4 border-2 border-gray-100 dark:border-slate-600 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

CreateProduct.getLayout = (page) => <Layout>{page}</Layout>;
