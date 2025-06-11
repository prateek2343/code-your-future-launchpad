
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SupportSystemSection = () => {
  return (
    <section className="mb-12 print:mb-8">
      <h2 className="text-2xl font-bold mb-6 print:text-xl">🤝 Comprehensive Support System</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
        <Card className="print:border print:shadow-none">
          <CardHeader className="print:pb-2">
            <CardTitle className="text-lg flex items-center">
              <span className="mr-2">❓</span>
              Doubt Clearing Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Daily 1-hour doubt clearing sessions</li>
              <li>• Live Q&A with instructors</li>
              <li>• No question is too small or too big</li>
              <li>• Recorded sessions for later review</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardHeader className="print:pb-2">
            <CardTitle className="text-lg flex items-center">
              <span className="mr-2">👥</span>
              Group Discussions
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Weekly group problem-solving sessions</li>
              <li>• Peer-to-peer learning opportunities</li>
              <li>• Code review sessions with classmates</li>
              <li>• Team projects and collaboration</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardHeader className="print:pb-2">
            <CardTitle className="text-lg flex items-center">
              <span className="mr-2">🎯</span>
              One-on-One Mentoring
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Bi-weekly personal mentoring sessions</li>
              <li>• Customized learning plans</li>
              <li>• Career guidance and goal setting</li>
              <li>• Personal project feedback</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="print:border print:shadow-none">
          <CardHeader className="print:pb-2">
            <CardTitle className="text-lg flex items-center">
              <span className="mr-2">💬</span>
              24/7 Community Support
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Active Discord/Slack community</li>
              <li>• Peer support and networking</li>
              <li>• Alumni mentorship program</li>
              <li>• Study groups and coding challenges</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SupportSystemSection;
