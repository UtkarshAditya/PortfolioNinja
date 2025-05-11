import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { templates } from "@/data/templates";
import TemplateCard from "@/components/templates/TemplateCard";
import { scrollToElement } from "@/lib/utils";
import { 
  Star, 
  Briefcase, 
  Globe, 
  Lightbulb, 
  ChevronRight, 
  ExternalLink,
  ArrowRight,
  Sparkles,
  Eye,
  X
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Home = () => {
  const [showPreview, setShowPreview] = useState(false);

  const featuredTemplate = templates.find(t => t.id === "developer-portfolio");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          
          <div className="flex flex-col md:flex-row md:items-center relative z-10">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                Build Your <span className="gradient-text">Personal Brand</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed animate-fade-in-up">
                Create stunning portfolios that showcase your work with ease. Stand out in a competitive market with professional templates.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
                <Button 
                  className="px-8 py-4 h-auto bg-gradient-to-r from-[#3182CE] to-[#4299E1] hover:from-[#2B6CB0] hover:to-[#3182CE] text-white text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
                  onClick={() => scrollToElement("templates")}
                >
                  Browse Templates
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-4 h-auto bg-white/70 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white text-lg rounded-lg shadow-md transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  onClick={() => scrollToElement("why-portfolio")}
                >
                  Learn More
                </Button>
              </div>
              
              <div className="mt-12 flex items-center animate-fade-in-up">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Sparkles className="h-5 w-5 text-[#805AD5]" />
                  <span>Join our community of creative professionals</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative animate-fade-in-right">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
              
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80" 
                alt="Professional workspace with portfolio designs" 
                className="rounded-xl shadow-2xl w-full h-auto relative z-10 floating-element" 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-10 transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-portfolio" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why a Portfolio Matters</h2>
            <p className="mt-4 text-xl text-gray-300">A well-crafted portfolio is essential for professionals in today's digital world</p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-[#805AD5] rounded-full flex items-center justify-center text-white mb-5">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Stand Out</h3>
              <p className="mt-3 text-gray-300">Differentiate yourself from competitors and showcase your unique skills and style.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-[#3182CE] rounded-full flex items-center justify-center text-white mb-5">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Attract Opportunities</h3>
              <p className="mt-3 text-gray-300">Increase your chances of landing jobs, clients, and collaborations with a professional portfolio.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-[#805AD5] rounded-full flex items-center justify-center text-white mb-5">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Build Credibility</h3>
              <p className="mt-3 text-gray-300">Establish trust and showcase your expertise through a polished online presence.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 bg-[#3182CE] rounded-full flex items-center justify-center text-white mb-5">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Express Creativity</h3>
              <p className="mt-3 text-gray-300">Show off your personal style and creative thinking in an organized, professional format.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-700 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white">Ready to showcase your work?</h3>
                <p className="mt-3 text-gray-300">Join our community of creative professionals and build your portfolio today.</p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
                <Button 
                  className="px-6 py-3 h-auto bg-[#805AD5] hover:bg-purple-700 text-white rounded-lg text-lg"
                  onClick={() => scrollToElement("templates")}
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio Templates</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Choose from our professionally designed templates that are ready to customize</p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {templates.slice(0, 6).map((template) => (
              <div key={template.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <TemplateCard template={template} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/templates">
              <Button variant="default" size="lg" className="px-8 py-6 h-auto bg-[#2D3748] hover:bg-gray-700 text-white rounded-lg text-lg inline-flex items-center">
                View All Templates
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Template Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
              <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium mb-6">FEATURED TEMPLATE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Clean Portfolio: Our Most Popular Template</h2>
              <p className="mt-6 text-lg text-gray-300">
                The Clean Portfolio template is perfect for professionals who want to showcase their work in a minimalist, elegant way. With a focus on typography and whitespace, this template puts your work at the center of attention.
              </p>
              
              <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Template Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-[#805AD5] mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#805AD5] mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">Easy to customize sections and layouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#805AD5] mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">Optimized for fast loading and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#805AD5] mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">Built with modern HTML and CSS best practices</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Link to={`/templates/${templates[0].id}`}>
                  <Button 
                    className="px-6 py-3 h-auto bg-[#805AD5] hover:bg-purple-700 text-white rounded-lg"
                  >
                    View Code Example
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="px-6 py-3 h-auto bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                  onClick={() => setShowPreview(true)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Live Preview
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80" 
                alt="Clean portfolio template preview" 
                className="rounded-xl shadow-xl w-full h-auto border border-gray-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-6xl h-[90vh] bg-gray-900 border-gray-700 p-0 rounded-none flex flex-col justify-start items-start">
          <div className="w-full h-full flex-1">
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <script>
                    document.addEventListener('DOMContentLoaded', function() {
                      document.querySelectorAll('a').forEach(a => {
                        a.addEventListener('click', e => e.preventDefault());
                      });
                    });
                  </script>
                  <style>
                    :root {
                      color-scheme: dark;
                    }
                    body {
                      background-color: #0f0f0f;
                      color: #ffffff;
                      margin: 0;
                      padding: 0;
                    }
                    ${featuredTemplate?.css}
                  </style>
                </head>
                <body>
                  ${featuredTemplate?.html}
                </body>
                </html>
              `}
              className="w-full h-[90vh] border-0 bg-gray-900 m-0 p-0"
              title="Template Preview"
              style={{ margin: 0, padding: 0, border: 0, display: 'block' }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
          <button
            className="absolute top-4 right-4 z-20 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full p-2"
            onClick={() => setShowPreview(false)}
            aria-label="Close Preview"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#805AD5] to-[#3182CE] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Build Your Portfolio?</h2>
          <div className="h-1 w-40 bg-white opacity-30 mx-auto my-6"></div>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Choose from our professional templates and create a stunning portfolio today. No coding skills required.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              className="px-8 py-4 h-auto bg-white text-[#805AD5] hover:bg-gray-100 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => scrollToElement("templates")}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
