
import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">🔧 Tools & Technologies Covered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
        <div>
          <h3 className="font-semibold mb-3">🖼️ Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Redux Toolkit", "Next.js", "TailwindCSS"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">⚙️ Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">🧰 DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "Docker", "GitHub Actions", "Nginx", "Linux"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">🏗️ Architecture</h3>
          <div className="flex flex-wrap gap-2">
            {["SOA", "Microservices", "REST APIs", "CI/CD"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">🧪 Testing</h3>
          <div className="flex flex-wrap gap-2">
            {["Jest", "React Testing Library", "Postman"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
