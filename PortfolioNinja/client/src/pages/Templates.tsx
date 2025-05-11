import { templates } from "@/data/templates";
import TemplateCard from "@/components/templates/TemplateCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const Templates = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio Templates</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our professionally designed templates that are ready to customize
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
