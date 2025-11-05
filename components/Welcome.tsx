

export default function Welcome() {
  return (
    <div className="border-t border-b border-gray-200">
        <div className="relative  py-16 bg-white mt-24 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Welcome to {" "} <span className="  bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-pink-400 after:rounded-full">Skinflow</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We craft clean, effective, and minimalist skincare powered by science.
            Experience simplicity that works for your skin.
          </p>
          {/* <div className="mt-10 flex justify-center">
            <div className="h-0.5 w-24 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 rounded-full"></div>
          </div> */}
        </div>


        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-34 px-6">
          <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Science‑Backed Formulas</h3>
            <p className="text-gray-500 text-sm">
              Every ingredient is clinically proven and dermatologist‑tested for maximum efficacy.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Sustainable Packaging</h3>
            <p className="text-gray-500 text-sm">
              Our eco‑friendly packaging keeps your conscience as clear as your skin.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Cruelty‑Free Promise</h3>
            <p className="text-gray-500 text-sm">
              Skinflow products are never tested on animals ever.
            </p>
          </div>
        </div>
    </div>
  );
}