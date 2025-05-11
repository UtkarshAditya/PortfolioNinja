import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Layers className="h-6 w-6 text-[#805AD5] mr-2" />
              <span className="font-bold text-xl">Portfolio Ninja</span>
            </div>
            <p className="text-gray-400 mb-6">
              Create professional portfolios that showcase your work and help you stand out.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#805AD5] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#why-portfolio" className="text-gray-400 hover:text-[#805AD5] transition-colors">Why Portfolios</Link>
              </li>
              <li>
                <Link href="/#templates" className="text-gray-400 hover:text-[#805AD5] transition-colors">Templates</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#805AD5] transition-colors">Tutorials</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest templates and features</p>
            <form className="space-y-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-[#805AD5]" 
                />
                <Button 
                  type="submit" 
                  className="rounded-l-none bg-[#805AD5] hover:bg-purple-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </Button>
              </div>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Portfolio Ninja. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#805AD5] text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#805AD5] text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-[#805AD5] text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
