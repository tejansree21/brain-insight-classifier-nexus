
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, Brain, FileImage, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();

  // Features section data
  const features = [
    {
      title: "Brain Tumor Detection",
      description: "Identify potential brain tumors in MRI scans using advanced image recognition.",
      icon: <Brain className="h-12 w-12 text-tumor" />,
      color: "bg-tumor/10",
    },
    {
      title: "Metastasis Identification",
      description: "Detect potential metastatic spread to brain tissue from primary cancers elsewhere.",
      icon: <Microscope className="h-12 w-12 text-metastasis" />,
      color: "bg-metastasis/10",
    },
    {
      title: "Healthy Tissue Analysis",
      description: "Confirm normal brain anatomy and identify healthy brain tissue.",
      icon: <Activity className="h-12 w-12 text-healthy" />,
      color: "bg-healthy/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-medical-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-medical-800">
                Advanced Brain Scan Classification
              </h1>
              <p className="text-xl text-medical-600 max-w-[700px]">
                Analyze brain MRI scans to identify tumors, metastases, and healthy tissue with our 
                AI-powered classification system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => navigate("/classify")}
                >
                  <FileImage className="h-5 w-5" />
                  Analyze Brain Scan
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2"
                  onClick={() => navigate("/education")}
                >
                  <Brain className="h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-medical-800">
                Classification Capabilities
              </h2>
              <p className="mt-4 text-xl text-medical-600 max-w-[700px] mx-auto">
                Our system can differentiate between various brain tissue conditions
                to assist in early detection and diagnosis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader className={`${feature.color} rounded-t-lg`}>
                    <div className="flex justify-center py-4">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-xl mb-2 text-center">{feature.title}</CardTitle>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-12 md:py-16 bg-medical-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-medical-800">
                Ready to Analyze Your Brain Scan?
              </h2>
              <p className="text-lg text-medical-600 max-w-[600px]">
                Upload your MRI scan and get instant classification results.
              </p>
              <Button 
                className="mt-4 gap-2"
                onClick={() => navigate("/classify")}
              >
                <FileImage className="h-4 w-4" />
                Start Analysis
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 bg-medical-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-medical-300" />
              <span className="ml-2 text-lg font-semibold">NeuraScan</span>
            </div>
            <p className="mt-4 text-sm text-medical-300">
              This is a demonstration project. Not for clinical use.
            </p>
            <p className="mt-2 text-sm text-medical-300">
              © {new Date().getFullYear()} NeuraScan Classification System
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
