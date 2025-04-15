
import { Brain, AlertCircle, Microscope, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function EducationalInfo() {
  return (
    <Tabs defaultValue="tumor" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="tumor" className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <span>Brain Tumor</span>
        </TabsTrigger>
        <TabsTrigger value="metastasis" className="flex items-center gap-2">
          <Microscope className="h-4 w-4" />
          <span>Metastasis</span>
        </TabsTrigger>
        <TabsTrigger value="healthy" className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          <span>Healthy Brain</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="tumor">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-tumor" />
              Brain Tumors
            </CardTitle>
            <CardDescription>
              Understanding brain tumors and their characteristics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Brain tumors are abnormal growths of cells in the brain tissue. They can be either benign (non-cancerous) 
              or malignant (cancerous).
            </p>
            
            <h4 className="font-medium text-medical-700">Primary Brain Tumors</h4>
            <p>
              Primary brain tumors originate in the brain itself and can develop from various cell types, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Glial cells (gliomas)</li>
              <li>Meningeal cells (meningiomas)</li>
              <li>Nerve sheath cells (schwannomas)</li>
              <li>Pituitary gland cells (pituitary adenomas)</li>
            </ul>
            
            <h4 className="font-medium text-medical-700">Common Symptoms</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Headaches that worsen in the morning</li>
              <li>Seizures</li>
              <li>Cognitive changes</li>
              <li>Vision or hearing problems</li>
              <li>Balance issues</li>
              <li>Personality changes</li>
            </ul>
            
            <div className="text-sm bg-medical-100 p-3 rounded-md">
              <p className="font-medium">Note on Imaging:</p>
              <p>In MRI scans, tumors typically appear as masses with irregular borders, often with surrounding edema (swelling). 
              They may enhance with contrast due to disruption of the blood-brain barrier.</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="metastasis">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Microscope className="h-5 w-5 text-metastasis" />
              Brain Metastasis
            </CardTitle>
            <CardDescription>
              Secondary cancers that spread to the brain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Brain metastases are cancer cells that have spread to the brain from primary tumors in other organs. 
              They are actually more common than primary brain tumors.
            </p>
            
            <h4 className="font-medium text-medical-700">Common Primary Sources</h4>
            <p>Brain metastases most commonly originate from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lung cancer (50-60% of cases)</li>
              <li>Breast cancer (15-20%)</li>
              <li>Melanoma (5-10%)</li>
              <li>Renal cell carcinoma</li>
              <li>Colorectal cancer</li>
            </ul>
            
            <h4 className="font-medium text-medical-700">Characteristics</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Often multiple lesions (unlike primary tumors)</li>
              <li>Typically well-circumscribed</li>
              <li>Located at the gray-white matter junction</li>
              <li>Significant surrounding edema (swelling)</li>
            </ul>
            
            <div className="text-sm bg-medical-100 p-3 rounded-md">
              <p className="font-medium">Imaging Features:</p>
              <p>On MRI, metastases often show as multiple, well-defined lesions with significant enhancement with contrast. 
              They frequently occur at the junction between gray and white matter and may have substantial surrounding edema.</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="healthy">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-healthy" />
              Healthy Brain Anatomy
            </CardTitle>
            <CardDescription>
              Understanding normal brain structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The human brain is a complex organ composed of billions of neurons organized into distinct regions, 
              each with specialized functions.
            </p>
            
            <h4 className="font-medium text-medical-700">Major Brain Structures</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Cerebrum:</span> The largest part, divided into two hemispheres, responsible for higher functions like thought, memory, and sensory processing</li>
              <li><span className="font-medium">Cerebellum:</span> Located at the back of the brain, coordinates movement and balance</li>
              <li><span className="font-medium">Brainstem:</span> Connects the brain to the spinal cord, controls vital functions like breathing and heart rate</li>
              <li><span className="font-medium">Limbic System:</span> Includes structures involved in emotion, memory, and motivation</li>
            </ul>
            
            <h4 className="font-medium text-medical-700">Brain Tissue Types</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Gray Matter:</span> Contains neuronal cell bodies, appears gray</li>
              <li><span className="font-medium">White Matter:</span> Contains myelinated axons, appears white</li>
              <li><span className="font-medium">Cerebrospinal Fluid (CSF):</span> Clear fluid surrounding the brain and in ventricles</li>
            </ul>
            
            <div className="text-sm bg-medical-100 p-3 rounded-md">
              <p className="font-medium">Healthy Brain on Imaging:</p>
              <p>On MRI, healthy brain tissue shows clear differentiation between gray and white matter. 
              Ventricles appear as well-defined, symmetrical structures filled with CSF. 
              There should be no abnormal enhancing areas, masses, or areas of abnormal signal intensity.</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
