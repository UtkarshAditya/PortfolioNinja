import { Template } from "@/data/templates";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="relative group bg-gray-800 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={template.image}
            alt={template.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Preview button overlay */}
          <button
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={() => setShowPreview(true)}
            aria-label="Live Preview"
            type="button"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{template.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {template.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full ${
                  tag.color === "blue"
                    ? "bg-blue-900/50 text-blue-300"
                    : tag.color === "purple"
                    ? "bg-purple-900/50 text-purple-300"
                    : tag.color === "green"
                    ? "bg-green-900/50 text-green-300"
                    : tag.color === "pink"
                    ? "bg-pink-900/50 text-pink-300"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <Link href={`/templates/${template.id}`}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
                    }
                    ${template.css}
                  </style>
                </head>
                <body>
                  ${template.html}
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
    </>
  );
};

export default TemplateCard;
