
import { Activity, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ClassificationResult, ClassificationType } from "@/lib/classifier";

interface ClassificationResultProps {
  result: ClassificationResult | null;
}

export function ClassificationResultDisplay({ result }: ClassificationResultProps) {
  if (!result) {
    return null;
  }

  // Format the confidence as a percentage
  const confidencePercent = Math.round(result.confidence * 100);
  
  // Get result-specific details
  const getResultDetails = (type: ClassificationType) => {
    switch (type) {
      case "tumor":
        return {
          title: "Brain Tumor Detected",
          description: "The scan shows patterns consistent with a brain tumor.",
          icon: <AlertTriangle className="h-8 w-8 text-tumor" />,
          color: "bg-tumor",
          textColor: "text-tumor"
        };
      case "metastasis":
        return {
          title: "Metastasis Detected",
          description: "The scan shows patterns consistent with metastatic spread.",
          icon: <Activity className="h-8 w-8 text-metastasis" />,
          color: "bg-metastasis",
          textColor: "text-metastasis"
        };
      case "healthy":
        return {
          title: "Healthy Brain Tissue",
          description: "No abnormalities detected in the brain scan.",
          icon: <CheckCircle className="h-8 w-8 text-healthy" />,
          color: "bg-healthy",
          textColor: "text-healthy"
        };
      default:
        return {
          title: "Uncertain Classification",
          description: "The system could not confidently classify this scan.",
          icon: <Info className="h-8 w-8 text-medical-500" />,
          color: "bg-medical-500",
          textColor: "text-medical-500"
        };
    }
  };

  const details = getResultDetails(result.type);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {details.icon}
        <div>
          <CardTitle className={details.textColor}>{details.title}</CardTitle>
          <CardDescription>{details.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-medium">{confidencePercent}%</span>
            </div>
            <Progress value={confidencePercent} className={`h-2 ${details.color}`} />
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="mt-2">
              Analysis completed on {result.timestamp.toLocaleDateString()} at {result.timestamp.toLocaleTimeString()}
            </p>
            {result.confidence < 0.7 && (
              <p className="mt-2 text-amber-500 flex items-center">
                <Info className="h-4 w-4 mr-1" />
                This result has lower confidence and should be verified by a medical professional.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
