
import { Card, CardContent } from "@/components/ui/card";

const CoursesOfferedSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">📚 Courses We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="text-xl font-semibold mb-3 text-primary">Full-Stack Development</h3>
            <p className="text-base text-muted-foreground mb-4">
              Comprehensive 6-month program covering React, Node.js, MongoDB, Docker, and Next.js. Learn to build and deploy scalable web applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Frontend & Backend Development</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Real-world Projects</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Job Placement Support</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="text-xl font-semibold mb-3 text-primary">Data Science & Analytics</h3>
            <p className="text-base text-muted-foreground mb-4">
              Master Python, machine learning, and data visualization tools. Transform data into actionable insights for business decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Python & R Programming</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Machine Learning</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Industry Datasets</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="text-xl font-semibold mb-3 text-primary">Mobile App Development</h3>
            <p className="text-base text-muted-foreground mb-4">
              Build native and cross-platform mobile applications using React Native and Flutter. Deploy to both iOS and Android stores.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">React Native & Flutter</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Cross-platform Development</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">App Store Publishing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="text-xl font-semibold mb-3 text-primary">DevOps & Cloud Computing</h3>
            <p className="text-base text-muted-foreground mb-4">
              Learn modern DevOps practices, CI/CD pipelines, and cloud platforms like AWS and Azure for scalable infrastructure management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">AWS & Azure Platforms</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">CI/CD Pipelines</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                <span className="text-sm">Infrastructure as Code</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoursesOfferedSection;
