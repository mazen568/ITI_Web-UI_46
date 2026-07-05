import Layout from "@/components/Layout"

export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b border-purple-100 pb-4">
        About <span className="text-purple-600">Us</span>
      </h1>
      
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <p>
          Welcome to <span className="font-bold text-gray-900">ITI</span>, where we believe that high-quality products should be accessible to everyone. Our journey started with a simple idea: to curate the best items and bring them directly to you.
        </p>
        
        <p>
          Our team is dedicated to sourcing products that meet our high standards for durability, aesthetic appeal, and functionality. We carefully select each item in our collection to ensure it adds value to your life.
        </p>
        
        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 mt-12">
          <h2 className="text-xl font-bold text-purple-900 mb-3">Our Mission</h2>
          <p className="text-purple-800 text-base">
            To provide a seamless shopping experience and deliver products that inspire confidence and joy in our customers every single day.
          </p>
        </div>
      </div>
    </div>
  );
}

AboutUs.getLayout=(page)=>{
    return <Layout>{page}</Layout>
}