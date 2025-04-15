
import { useState, useRef, ChangeEvent } from "react";
import { Brain, File, FileImage, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClassificationType } from "@/lib/classifier";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isLoading: boolean;
  selectedImage: string | null;
  onClearImage: () => void;
  classificationType?: ClassificationType;
}

export function ImageUpload({
  onImageSelect,
  isLoading,
  selectedImage,
  onClearImage,
  classificationType
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onImageSelect(file);
    }
  };

  // Get border color based on classification type
  const getBorderColor = (type?: ClassificationType) => {
    switch (type) {
      case "tumor":
        return "border-tumor";
      case "metastasis":
        return "border-metastasis";
      case "healthy":
        return "border-healthy";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!selectedImage ? (
        <Card 
          className={`relative border-2 border-dashed ${isDragging ? "border-medical-400 bg-medical-50" : "border-gray-300"} rounded-lg overflow-hidden`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardContent className="flex flex-col items-center justify-center p-8 text-center">
            <FileImage className="h-16 w-16 text-medical-300 mb-4" />
            <h3 className="font-medium text-lg mb-2">Upload Brain Scan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop your MRI scan, or click to browse
            </p>
            <Button 
              className="gap-2"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4" />
              Browse Files
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </CardContent>
        </Card>
      ) : (
        <div className="relative">
          <div className={`relative rounded-lg overflow-hidden border-4 ${getBorderColor(classificationType)}`}>
            <img 
              src={selectedImage} 
              alt="Brain scan" 
              className="w-full h-auto max-h-80 object-contain"
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <Brain className="h-10 w-10 text-white animate-pulse" />
                  <span className="text-white mt-2">Analyzing scan...</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex justify-between">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearImage}
              className="gap-2"
            >
              <X className="h-4 w-4" /> Clear
            </Button>
            
            <Button 
              onClick={() => fileInputRef.current?.click()}
              size="sm"
              variant="secondary"
              className="gap-2"
              disabled={isLoading}
            >
              <File className="h-4 w-4" /> Select Different
            </Button>
            
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
