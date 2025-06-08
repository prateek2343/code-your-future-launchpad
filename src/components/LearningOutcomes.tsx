
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const outcomes = [
  "Build and deploy full-stack web applications",
  "Work confidently with React, Node.js, MongoDB, Docker, and Next.js",
  "Understand and implement scalable backend architecture",
  "Deploy using real-world tools like Nginx and GitHub Actions",
  "Crack job interviews and build a standout developer portfolio"
];

export const LearningOutcomes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                By the End of This Program, You'll Be Able To:
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform your career with industry-ready skills that employers are actively seeking
              </p>
            </div>
            
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full sm:w-auto gradient-card text-white hover:opacity-90 text-lg px-8 py-6">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                🚀 <strong>Enrollment Now Open</strong> – Limited Seats Available!
              </p>
            </div>
          </div>
          
          <Card className="lg:ml-8 gradient-card text-white">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Code Your Future?</h3>
              <p className="text-lg opacity-90">
                Don't just learn to code—learn to build like a professional.
              </p>
              <div className="space-y-4">
                <div className="text-4xl font-bold">6</div>
                <div className="text-lg">Months to Career Transformation</div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full bg-white text-purple-700 hover:bg-gray-100"
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
