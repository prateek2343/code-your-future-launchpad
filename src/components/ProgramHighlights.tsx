
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Briefcase, Layers, Wrench, Target } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "End-to-End Curriculum",
    description: "Learn everything from HTML/CSS and JavaScript to React, Node.js, MongoDB, Docker, and Microservices—all in one place."
  },
  {
    icon: Wrench,
    title: "Real-World Architecture", 
    description: "Build projects using industry-standard patterns like SOA, Microservices, CI/CD, and Nginx reverse proxies."
  },
  {
    icon: Target,
    title: "Hands-On Capstone Project",
    description: "Apply your knowledge by building a full-fledged production-grade app—hosted, deployed, and demo-ready."
  },
  {
    icon: CheckCircle,
    title: "Modern Tools & Frameworks",
    description: "We teach you what companies actually use: React, Redux Toolkit, Next.js, Express, Docker, GitHub Actions, and more."
  },
  {
    icon: Briefcase,
    title: "Career-Focused Outcomes",
    description: "Get help with resume writing, portfolio building, GitHub optimization, and interview prep so you're ready for your first job."
  },
  {
    icon: Users,
    title: "Mentorship & Community Support",
    description: "You're never alone. Get access to a community of peers, instructors, and alumni ready to support and guide you."
  }
];

export const ProgramHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            What Makes This Program Stand Out?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach ensures you get real-world skills that employers are actively looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
