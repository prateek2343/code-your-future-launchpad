
import AboutUsSection from "@/components/course/AboutUsSection";
import WhyNeedCourseSection from "@/components/course/WhyNeedCourseSection";
import WhatMakesSpecialSection from "@/components/course/WhatMakesSpecialSection";
import SupportSystemSection from "@/components/course/SupportSystemSection";
import ProgramOverviewSection from "@/components/course/ProgramOverviewSection";
import TargetAudienceSection from "@/components/course/TargetAudienceSection";
import LearningOutcomesSection from "@/components/course/LearningOutcomesSection";
import CurriculumSection from "@/components/course/CurriculumSection";
import TechnologiesSection from "@/components/course/TechnologiesSection";

const CourseMaterialPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-foreground print:p-4">
      {/* Header */}
      <div className="text-center mb-12 print:mb-8">
        <h1 className="text-4xl font-bold mb-4 print:text-3xl">
          Full-Stack Development Program
        </h1>
        <p className="text-xl text-muted-foreground print:text-lg">
          6-Month Comprehensive Curriculum
        </p>
      </div>

      <AboutUsSection />
      <WhyNeedCourseSection />
      <WhatMakesSpecialSection />
      <SupportSystemSection />
      <ProgramOverviewSection />
      <TargetAudienceSection />
      <LearningOutcomesSection />
      <CurriculumSection />
      <TechnologiesSection />

      {/* Print Footer */}
      <div className="hidden print:block text-center text-sm text-muted-foreground mt-8 pt-4 border-t">
        <p>Full-Stack Development Program - 6-Month Curriculum</p>
      </div>
    </div>
  );
};

export default CourseMaterialPage;
