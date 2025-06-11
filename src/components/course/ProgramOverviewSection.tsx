
import { Card, CardContent } from "@/components/ui/card";

const ProgramOverviewSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">🚀 Program Overview</h2>
      <p className="text-lg mb-6 print:text-base">
        Become a Job-Ready Full-Stack Developer in Just 6 Months. Our comprehensive program is designed to turn absolute beginners into confident, job-ready full-stack developers—equipped with real-world tools, modern tech stacks, and project experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">✅ End-to-End Curriculum</h3>
            <p className="text-sm text-muted-foreground">Learn everything from HTML/CSS and JavaScript to React, Node.js, MongoDB, Docker, and Microservices—all in one place.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">✅ Real-World Architecture</h3>
            <p className="text-sm text-muted-foreground">Build projects using industry-standard patterns like SOA, Microservices, CI/CD, and Nginx reverse proxies.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">✅ Hands-On Capstone Project</h3>
            <p className="text-sm text-muted-foreground">Apply your knowledge by building a full-fledged production-grade app—hosted, deployed, and demo-ready.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">✅ Career-Focused Outcomes</h3>
            <p className="text-sm text-muted-foreground">Get help with resume writing, portfolio building, GitHub optimization, and interview prep.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
