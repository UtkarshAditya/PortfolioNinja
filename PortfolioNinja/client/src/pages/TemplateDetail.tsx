import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { templates, Template } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardCopy, Check, Eye, Code, ArrowLeft, ExternalLink, X } from "lucide-react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const TemplateDetail = () => {
  const [_, params] = useRoute("/templates/:id");
  const [template, setTemplate] = useState<Template | null>(null);
  const [htmlCopied, setHtmlCopied] = useState(false);
  const [cssCopied, setCssCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (params && params.id) {
      const foundTemplate = templates.find(t => t.id === params.id);
      setTemplate(foundTemplate || null);
    }
  }, [params]);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <Link href="/templates">
            <Button className="bg-[#805AD5] hover:bg-purple-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyBoth = async () => {
    const combinedCode = `/* HTML */\n${template.html}\n\n/* CSS */\n${template.css}`;
    const success = await copyToClipboard(combinedCode);
    if (success) {
      toast({
        title: "Code copied to clipboard",
        description: "HTML and CSS have been copied to your clipboard.",
        duration: 2000,
      });
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleCopyHtml = async () => {
    const success = await copyToClipboard(template.html);
    if (success) {
      setHtmlCopied(true);
      toast({
        title: "HTML copied to clipboard",
        description: "You can now paste the code into your project.",
        duration: 2000,
      });
      setTimeout(() => setHtmlCopied(false), 2000);
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleCopyCss = async () => {
    const success = await copyToClipboard(template.css);
    if (success) {
      setCssCopied(true);
      toast({
        title: "CSS copied to clipboard",
        description: "You can now paste the code into your project.",
        duration: 2000,
      });
      setTimeout(() => setCssCopied(false), 2000);
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/templates">
            <Button variant="ghost" className="text-gray-300 hover:text-[#805AD5]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{template.name}</h1>
              <p className="text-xl text-gray-300">{template.description}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
              <ul className="space-y-3">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-[#805AD5] mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#805AD5] hover:bg-purple-700"
                onClick={handleCopyBoth}
              >
                <ClipboardCopy className="mr-2 h-4 w-4" />
                Use Template
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
                onClick={() => setShowPreview(true)}
              >
                <Eye className="mr-2 h-4 w-4" />
                Live Preview
              </Button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Code</h2>
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="css">CSS</TabsTrigger>
                </TabsList>
                <TabsContent value="html" className="mt-4">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                      onClick={handleCopyHtml}
                    >
                      {htmlCopied ? <Check className="h-4 w-4" /> : <ClipboardCopy className="h-4 w-4" />}
                    </Button>
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{template.html}</code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="css" className="mt-4">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                      onClick={handleCopyCss}
                    >
                      {cssCopied ? <Check className="h-4 w-4" /> : <ClipboardCopy className="h-4 w-4" />}
                    </Button>
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{template.css}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <img 
              src={template.image} 
              alt={template.name} 
              className="rounded-xl shadow-2xl w-full h-auto relative z-10 floating-element border border-gray-700" 
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-10 transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl h-[80vh] bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white flex justify-between items-center">
              <span>Live Preview - {template.name}</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => setShowPreview(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <iframe
              srcDoc={`${template.html}<style>${template.css}</style>`}
              className="w-full h-full border-0 bg-white"
              title="Template Preview"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TemplateDetail;