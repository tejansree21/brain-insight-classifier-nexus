
import { Header } from "@/components/Header";
import { EducationalInfo } from "@/components/EducationalInfo";
import { Brain, FileImage, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Educational Resources</h1>
          <p className="text-center text-muted-foreground mb-8">
            Learn about brain tumors, metastases, and healthy brain anatomy
          </p>
          
          <div className="mb-12">
            <EducationalInfo />
          </div>
          
          <div className="bg-medical-50 rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Brain Imaging</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-medical-700 mb-2">Types of Brain Scans</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">MRI (Magnetic Resonance Imaging):</span> Uses magnetic fields and radio waves to create detailed images of the brain.
                  </li>
                  <li>
                    <span className="font-medium">CT (Computed Tomography):</span> Uses X-rays to create cross-sectional images of the brain.
                  </li>
                  <li>
                    <span className="font-medium">PET (Positron Emission Tomography):</span> Shows how tissues and organs are functioning.
                  </li>
                  <li>
                    <span className="font-medium">fMRI (Functional MRI):</span> Shows brain activity by detecting changes in blood flow.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-medical-700 mb-2">MRI Views</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Axial (Horizontal):</span> View from top to bottom of the brain.
                  </li>
                  <li>
                    <span className="font-medium">Sagittal (Side):</span> View from side to side of the brain.
                  </li>
                  <li>
                    <span className="font-medium">Coronal (Frontal):</span> View from front to back of the brain.
                  </li>
                </ul>
                
                <h3 className="text-lg font-medium text-medical-700 mt-4 mb-2">Common MRI Sequences</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>T1-weighted: Good for anatomical detail</li>
                  <li>T2-weighted: Highlights fluid and edema</li>
                  <li>FLAIR: Suppresses CSF signal</li>
                  <li>DWI: Shows water diffusion patterns</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-medical-800 text-white rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-semibold mb-4">Ready to Analyze a Brain Scan?</h2>
                <p className="mb-6">
                  Upload a brain MRI scan to our classification system for an instant analysis. 
                  Our AI-powered tool can help identify potential brain tumors, metastases, or confirm healthy tissue.
                </p>
                <Button 
                  className="gap-2"
                  onClick={() => navigate("/classify")}
                >
                  <FileImage className="h-4 w-4" />
                  Start Analysis
                </Button>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-medical-700 p-6 rounded-full">
                  <Brain className="h-20 w-20 text-medical-200" />
                </div>
              </div>
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

export default Education;
