const HeroImage = () => {
  return (
    <div className="hidden lg:block lg:w-1/2 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="images\Homepage.png" // your image path
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Optional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-12">
        <div className="max-w-md text-center space-y-6">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Find Your Perfect Style
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Curated collections for the modern minimalist. Discover timeless
            pieces that define your aesthetic.
          </p>

          {/* Feature List */}
          <div className="pt-8 space-y-4 text-2xl">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-black rounded-full" />
              <span className="text-gray-800 font-semibold">
                Premium Quality Materials
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-black rounded-full" />
              <span className="text-gray-800 font-semibold">
                Sustainable Fashion
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-black rounded-full" />
              <span className="text-gray-800 font-semibold">
                Free Worldwide Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
