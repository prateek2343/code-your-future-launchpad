
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { ProgramHighlights } from "@/components/ProgramHighlights";
import { TargetAudience } from "@/components/TargetAudience";
import { Curriculum } from "@/components/Curriculum";
import { LearningOutcomes } from "@/components/LearningOutcomes";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProgramHighlights />
      <TargetAudience />
      <Curriculum />
      <LearningOutcomes />
      <Footer />
    </div>
  );
};

export default Index;
