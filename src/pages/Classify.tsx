
import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { ImageUpload } from "@/components/ImageUpload";
import { ClassificationResultDisplay } from "@/components/ClassificationResult";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ClassificationResult, ClassificationType, classifyBrainImage, initializeClassifier } from "@/lib/classifier";

const Classify = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [isModelReady, setIsModelReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize the classifier on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        const initialized = await initializeClassifier();
        setIsModelReady(initialized);
      } catch (err) {
        console.error("Error initializing classifier:", err);
        setError("Failed to initialize the classification model. Please try again later.");
      }
    };

    loadModel();
  }, []);

  // Handle image selection
  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
    
    // Create a preview URL for the selected image
    const url = URL.createObjectURL(file);
    setSelectedImage(url);
    
    // Classify the image
    handleClassify(file);
  };

  // Clear the selected image
  const handleClearImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  // Classify the brain image
  const handleClassify = async (file: File) => {
    if (!isModelReady) {
      setError("Classification model is not ready. Please try again later.");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const classificationResult = await classifyBrainImage(file);
      setResult(classificationResult);
    } catch (err) {
      console.error("Error classifying image:", err);
      setError("Error processing the image. Please try again with a different image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Brain Scan Classification</h1>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Upload Scan</h2>
              <ImageUpload 
                onImageSelect={handleImageSelect}
                isLoading={isLoading}
                selectedImage={selectedImage}
                onClearImage={handleClearImage}
                classificationType={result?.type}
              />
              
              {!selectedImage && (
                <div className="mt-4 p-4 bg-medical-50 rounded-md text-sm text-medical-700">
                  <p className="font-medium">Instructions:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Upload a clear MRI brain scan image</li>
                    <li>Formats supported: JPG, PNG</li>
                    <li>For better results, use axial (horizontal) view scans</li>
                    <li>Image should show the entire brain structure</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Classification Results</h2>
              
              {result ? (
                <ClassificationResultDisplay result={result} />
              ) : (
                <div className="h-60 border rounded-lg flex items-center justify-center bg-muted/20">
                  <p className="text-muted-foreground">
                    {isLoading 
                      ? "Analyzing image..." 
                      : selectedImage 
                        ? "Processing scan..." 
                        : "Upload a brain scan to see results"}
                  </p>
                </div>
              )}
              
              {result && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md text-sm">
                  <p className="font-medium text-medical-700">Disclaimer:</p>
                  <p className="mt-1 text-gray-600">
                    This classification is provided for demonstration purposes only and should not be used for medical diagnosis.
                    Always consult with qualified healthcare professionals for proper diagnosis and treatment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 bg-medical-800 text-white">
        <div className="container flex justify-center">
          <p className="text-sm text-medical-300">
            © {new Date().getFullYear()} NeuraScan Classification System | Not for clinical use
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Classify;
