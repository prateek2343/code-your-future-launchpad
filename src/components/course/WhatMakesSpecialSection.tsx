
import { Card, CardContent } from "@/components/ui/card";

const WhatMakesSpecialSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">⭐ What Makes Us Special</h2>
      <div className="space-y-4">
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <span className="mr-2">👨‍🏫</span>
              Expert Instructors with Industry Experience
            </h3>
            <p className="text-sm text-muted-foreground">Our instructors are working professionals from top tech companies with 5+ years of real-world experience.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <span className="mr-2">📚</span>
              Structured Learning Path
            </h3>
            <p className="text-sm text-muted-foreground">Our curriculum is carefully designed to build knowledge progressively, ensuring you master each concept before moving forward.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <span className="mr-2">🛠️</span>
              Hands-On Learning Approach
            </h3>
            <p className="text-sm text-muted-foreground">70% practical coding, 30% theory. Build real projects from day one and graduate with a portfolio that impresses employers.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <span className="mr-2">🏆</span>
              Job Placement Assistance
            </h3>
            <p className="text-sm text-muted-foreground">Resume building, interview preparation, and connections with our hiring partner network to help you land your first tech job.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatMakesSpecialSection;
