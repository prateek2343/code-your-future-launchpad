
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, RefreshCw, BookOpen, Briefcase, Code } from "lucide-react";

const audiences = [
  {
    icon: BookOpen,
    title: "Complete Beginners",
    description: "Want a structured, proven path to become a developer from scratch"
  },
  {
    icon: Code,
    title: "Self-Taught Coders",
    description: "Want to fill knowledge gaps and learn industry best practices"
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    description: "Looking to transition from non-tech backgrounds into development"
  },
  {
    icon: GraduationCap,
    title: "College Students",
    description: "Want to get job-ready skills before graduation"
  },
  {
    icon: Briefcase,
    title: "Freelancers & Entrepreneurs",
    description: "Want to build their own products and digital solutions"
  }
];

export const TargetAudience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Who Is This Program For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting fresh or looking to level up, this program is designed for motivated learners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 w-fit">
                  <audience.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {audience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
