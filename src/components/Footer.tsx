import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Accessories", path: "/accessories" },
        { name: "Sale", path: "/sale" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Shipping & Returns", path: "/shipping" },
        { name: "Size Guide", path: "/size-guide" },
        { name: "Track Order", path: "/track-order" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      path: "#",
      label: "Facebook",
      src: "/icons/facebook.svg",
      alt: "Facebook",
    },
    {
      path: "#",
      label: "Instagram",
      src: "/icons/instagram.svg",
      alt: "Instagram",
    },
    { path: "#", label: "X", src: "/icons/x.svg", alt: "X" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/home" className="inline-block">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-8 w-8" />
                <span className="text-2xl font-bold tracking-tight">Forme</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm">
              Minimalist fashion for the modern wardrobe. Quality pieces that
              stand the test of time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                return (
                  <Link
                    key={social.label}
                    to={social.path}
                    aria-label={social.label}
                    className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="h-5 w-5"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Forme. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-black transition-colors"
              >
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms
              </Link>
              <Link
                to="/cookies"
                className="hover:text-black transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
