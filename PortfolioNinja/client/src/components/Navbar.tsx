import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Layers } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Layers className="h-6 w-6 text-[#805AD5] mr-2" />
              <span className="font-bold text-xl text-white">Portfolio Ninja</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#why-portfolio" className="text-gray-300 hover:text-[#805AD5] transition-colors">
              Why Portfolios
            </Link>
            <Link href="/#templates" className="text-gray-300 hover:text-[#805AD5] transition-colors">
              Templates
            </Link>
            <Button
              variant="outline"
              className="border-[#805AD5] text-[#805AD5] hover:bg-[#805AD5] hover:text-white"
              onClick={() => window.location.href = '/login'}
            >
              Log In
            </Button>
            <Button 
              className="bg-[#3182CE] hover:bg-blue-700 text-white"
              onClick={() => window.location.href = '/register'}
            >
              Sign Up
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-[#805AD5]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              href="/#why-portfolio" 
              className="block px-3 py-2 text-gray-300 hover:text-[#805AD5] hover:bg-gray-800 rounded-md"
              onClick={closeMobileMenu}
            >
              Why Portfolios
            </Link>
            <Link 
              href="/#templates" 
              className="block px-3 py-2 text-gray-300 hover:text-[#805AD5] hover:bg-gray-800 rounded-md"
              onClick={closeMobileMenu}
            >
              Templates
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full border-[#805AD5] text-[#805AD5] hover:bg-[#805AD5] hover:text-white"
                onClick={() => window.location.href = '/login'}
              >
                Log In
              </Button>
              <Button 
                className="w-full bg-[#3182CE] hover:bg-blue-700"
                onClick={() => window.location.href = '/register'}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
