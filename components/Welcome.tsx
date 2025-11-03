

export default function Welcome() {
  return (
    <div>
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Welcome to <span className="text-gray-700 italic">Skinflow</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft clean, effective, and minimalist skincare powered by science.
            Experience simplicity that works for your skin.
          </p>
        </div>


        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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