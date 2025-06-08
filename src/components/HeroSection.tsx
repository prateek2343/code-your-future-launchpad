
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">6-Month Intensive Program</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Become a <span className="text-yellow-300">Job-Ready</span>
              <br />
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Transform from beginner to professional developer in just 6 months with our comprehensive bootcamp
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6">
              <Code className="mr-2 h-5 w-5" />
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              View Curriculum
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">100%</div>
              <div className="text-gray-200">Job-Ready Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">6</div>
              <div className="text-gray-200">Months to Career</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">1</div>
              <div className="text-gray-200">Capstone Project</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
