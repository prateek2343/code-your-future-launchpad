
import { Card, CardContent } from "@/components/ui/card";

const AboutUsSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">🏢 About TechForward Institute</h2>
      <Card className="print:border print:shadow-none">
        <CardContent className="p-6 print:p-4">
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              TechForward Institute is a premier technology education center dedicated to bridging the gap between academic learning and industry requirements. Established in 2018, we have successfully trained over 2,000+ students who are now working in top tech companies across the globe.
            </p>
            
            <p className="text-base leading-relaxed">
              Our mission is to empower the next generation of developers with cutting-edge skills, practical knowledge, and the confidence to excel in the rapidly evolving tech industry. We believe in hands-on learning, real-world project experience, and continuous mentorship to ensure our students are not just job-ready, but industry-leading professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 print:grid-cols-1">
              <div className="text-center p-4 bg-muted rounded-lg print:bg-transparent print:border">
                <h3 className="font-semibold text-lg mb-2">2000+</h3>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg print:bg-transparent print:border">
                <h3 className="font-semibold text-lg mb-2">95%</h3>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg print:bg-transparent print:border">
                <h3 className="font-semibold text-lg mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Industry Partners</p>
              </div>
            </div>
            
            <p className="text-base leading-relaxed">
              Our experienced faculty comprises industry veterans from leading companies like Google, Microsoft, Amazon, and innovative startups. We maintain strong partnerships with tech companies to ensure our curriculum stays current with industry trends and our graduates have direct pathways to employment opportunities.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutUsSection;
