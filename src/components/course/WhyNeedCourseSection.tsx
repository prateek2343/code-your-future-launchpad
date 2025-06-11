
import { Card, CardContent } from "@/components/ui/card";

const WhyNeedCourseSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">🎯 Why You Need This Course</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">💼 Industry Demand</h3>
            <p className="text-sm text-muted-foreground">Full-stack developers are among the most sought-after professionals with average salaries ranging from $70,000 to $120,000+ annually.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">🚀 Career Flexibility</h3>
            <p className="text-sm text-muted-foreground">Work as a freelancer, join startups, work for large corporations, or build your own products - the possibilities are endless.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">🌐 Future-Proof Skills</h3>
            <p className="text-sm text-muted-foreground">Learn modern technologies that are in high demand and will remain relevant for years to come.</p>
          </CardContent>
        </Card>
        
        <Card className="print:border print:shadow-none">
          <CardContent className="p-6 print:p-4">
            <h3 className="font-semibold mb-3">💡 Problem Solving</h3>
            <p className="text-sm text-muted-foreground">Develop critical thinking and problem-solving skills that are valuable in any industry.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyNeedCourseSection;
