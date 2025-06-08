
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, Server, Database, Cloud, Rocket, Monitor } from "lucide-react";

const curriculumMonths = [
  {
    month: 1,
    title: "Web Fundamentals & Front-End Basics",
    icon: Monitor,
    color: "bg-red-500",
    topics: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ Basics", 
      "Responsive Design & Flexbox/Grid",
      "Git & GitHub Workflows"
    ]
  },
  {
    month: 2,
    title: "React & Redux Development",
    icon: Code,
    color: "bg-blue-500",
    topics: [
      "React Components & Hooks",
      "React Router & Forms",
      "Redux Toolkit State Management",
      "Frontend Project Build"
    ]
  },
  {
    month: 3,
    title: "Backend with Node.js & MongoDB",
    icon: Server,
    color: "bg-green-500",
    topics: [
      "Node.js & Express Fundamentals",
      "MongoDB & Mongoose",
      "REST APIs & Authentication",
      "Linux & Networking Basics"
    ]
  },
  {
    month: 4,
    title: "Advanced Backend & DevOps",
    icon: Database,
    color: "bg-purple-500",
    topics: [
      "Service-Oriented Architecture",
      "Microservices Introduction",
      "Docker Fundamentals",
      "Nginx & Deployment"
    ]
  },
  {
    month: 5,
    title: "Full Stack with Next.js & CI/CD",
    icon: Cloud,
    color: "bg-orange-500",
    topics: [
      "Next.js Full Stack Development",
      "Docker Compose",
      "CI/CD with GitHub Actions",
      "Capstone Project Planning"
    ]
  },
  {
    month: 6,
    title: "Capstone Project & Career Prep",
    icon: Rocket,
    color: "bg-pink-500",
    topics: [
      "Production-Grade App Development",
      "Deployment & Monitoring",
      "Portfolio & Resume Building",
      "Interview Preparation"
    ]
  }
];

export const Curriculum = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            6-Month Comprehensive Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully structured learning path that takes you from basics to advanced full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumMonths.map((month, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${month.color}`}>
                    <month.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Month {month.month}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {month.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
            Tools & Technologies You'll Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React & Redux", "Node.js & Express", "MongoDB & Mongoose", "Docker & CI/CD",
              "Next.js", "GitHub Actions", "Nginx", "Linux & Networking",
              "Jest & Testing", "Microservices", "JWT & Auth", "REST APIs"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="justify-center py-2 hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
