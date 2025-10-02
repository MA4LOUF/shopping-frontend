import { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = ["New Arrivals", "Men", "Women", "Accessories", "Sale"];

  const icons = [
    {
      id: "heart",
      icon: Heart,
    },
    {
      id: "user",
      icon: User,
    },
    {
      id: "cart",
      icon: ShoppingCart,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        Free shipping on orders over $100 | Shop now
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <Link to="/home">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">Forme</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-gray-600 transition-colors relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {icons.map((icon, index) => {
              const IconComponent = icon.icon;
              return (
                <Link
                  key={icon.id}
                  to="/wishlist"
                  className="hidden sm:block p-2 hover:bg-gray-200 rounded-md transition-colors relative"
                  aria-label="Wishlist"
                >
                  <IconComponent className="h-5 w-5" />
                  {index === icons.length - 1 && (
                    <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
              >
                {category}
              </Link>
            ))}
            <Link
              to="/wishlist"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors sm:hidden"
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
