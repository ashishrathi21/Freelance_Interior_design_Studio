import { Home, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Design Studio</span>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Creating beautiful, functional interiors that inspire and delight. Your vision, our expertise, extraordinary results.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Residential Design</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Office Interiors</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Commercial Spaces</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">Renovation</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">3D Visualization</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} Design Studio. All rights reserved. Crafted with passion for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
