import { useState } from "react";
import { Template } from "@/data/templates";
import { 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X, ClipboardCopy, Check, Download } from "lucide-react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { useToast } from "@/hooks/use-toast";

interface CodeViewerProps {
  template: Template;
}

const CodeViewer = ({ template }: CodeViewerProps) => {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCopied, setHtmlCopied] = useState(false);
  const [cssCopied, setCssCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyHtml = async () => {
    const success = await copyToClipboard(template.html);
    if (success) {
      setHtmlCopied(true);
      toast({
        title: "HTML copied to clipboard",
        description: "You can now paste the code into your project.",
        duration: 3000,
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
        duration: 3000,
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

  const handleDownload = () => {
    // Create HTML file
    const htmlBlob = new Blob([template.html], { type: 'text/html' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const htmlLink = document.createElement('a');
    htmlLink.href = htmlUrl;
    htmlLink.download = `${template.name.toLowerCase().replace(/\s+/g, '-')}.html`;
    htmlLink.click();
    
    // Create CSS file
    const cssBlob = new Blob([template.css], { type: 'text/css' });
    const cssUrl = URL.createObjectURL(cssBlob);
    const cssLink = document.createElement('a');
    cssLink.href = cssUrl;
    cssLink.download = 'styles.css';
    cssLink.click();
    
    toast({
      title: "Files downloaded",
      description: "HTML and CSS files have been downloaded.",
      duration: 3000,
    });
  };

  return (
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <div className="flex justify-between items-center">
          <DialogTitle className="text-xl font-bold text-gray-800">
            {template.name} Template Code
          </DialogTitle>
          <DialogClose className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </DialogClose>
        </div>
        <DialogDescription>
          Copy the HTML and CSS code to use this template in your project.
        </DialogDescription>
      </DialogHeader>
      
      <Tabs defaultValue="html" className="mt-4" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="html" className={`px-4 py-2 text-sm font-medium ${activeTab === 'html' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
            HTML
          </TabsTrigger>
          <TabsTrigger value="css" className={`px-4 py-2 text-sm font-medium ${activeTab === 'css' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
            CSS
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="html" className="code-content">
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-h-[60vh] font-mono text-sm">
            {template.html}
          </pre>
        </TabsContent>
        
        <TabsContent value="css" className="code-content">
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-h-[60vh] font-mono text-sm">
            {template.css}
          </pre>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex justify-between">
        {activeTab === 'html' ? (
          <Button 
            variant="outline" 
            onClick={handleCopyHtml}
            className={`px-6 py-2 transition-all duration-300 transform ${
              htmlCopied ? 'bg-green-500 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {htmlCopied ? (
              <>
                <Check className="mr-2 h-4 w-4 animate-bounce" /> Copied HTML
              </>
            ) : (
              <>
                <ClipboardCopy className="mr-2 h-4 w-4" /> Copy HTML
              </>
            )}
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={handleCopyCss}
            className={`px-6 py-2 transition-all duration-300 transform ${
              cssCopied ? 'bg-green-500 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {cssCopied ? (
              <>
                <Check className="mr-2 h-4 w-4 animate-bounce" /> Copied CSS
              </>
            ) : (
              <>
                <ClipboardCopy className="mr-2 h-4 w-4" /> Copy CSS
              </>
            )}
          </Button>
        )}
        
        <Button 
          variant="default" 
          onClick={handleDownload}
          className="px-6 py-2 bg-[#3182CE] text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
        >
          <Download className="mr-2 h-4 w-4" /> Download Files
        </Button>
      </div>
    </DialogContent>
  );
};

export default CodeViewer;
