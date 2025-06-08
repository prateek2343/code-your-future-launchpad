
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

      {/* Program Overview */}
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

      {/* Target Audience */}
      <section className="mb-12 print:mb-8">
        <h2 className="text-2xl font-bold mb-6 print:text-xl">🧑‍💻 Who Is This For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Beginners who want a structured, proven path to become a developer</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Self-taught coders who want to fill the gaps and learn industry best practices</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Career switchers from non-tech backgrounds</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>College students looking to get job-ready before graduation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Freelancers & entrepreneurs who want to build their own products</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-12 print:mb-8">
        <h2 className="text-2xl font-bold mb-6 print:text-xl">🎯 Learning Outcomes</h2>
        <p className="mb-4">By the end of this program, you'll be able to:</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✅</span>
            <span>Build and deploy full-stack web applications</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✅</span>
            <span>Work confidently with React, Node.js, MongoDB, Docker, and Next.js</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✅</span>
            <span>Understand and implement scalable backend architecture</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✅</span>
            <span>Deploy using real-world tools like Nginx and GitHub Actions</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✅</span>
            <span>Crack job interviews and build a standout developer portfolio</span>
          </li>
        </ul>
      </section>

      {/* Detailed Curriculum */}
      <section className="mb-12 print:mb-8">
        <h2 className="text-2xl font-bold mb-6 print:text-xl">📚 6-Month Detailed Curriculum</h2>
        
        <div className="space-y-8 print:space-y-6">
          {/* Month 1 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-red-500 text-white">Month 1</Badge>
                <CardTitle className="text-xl print:text-lg">Web Fundamentals & Front-End Basics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Week 1: HTML & Web Basics</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• How the internet works (DNS, HTTP/S, IP)</li>
                    <li>• HTML5 semantics, forms, accessibility</li>
                    <li>• Tools setup: VS Code, Git, GitHub</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 2: CSS & Responsive Design</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• CSS Box Model, Flexbox, Grid</li>
                    <li>• Media queries, responsive layouts</li>
                    <li>• UI libraries: Bootstrap/Tailwind</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 3: JavaScript Fundamentals</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Variables, data types, control flow</li>
                    <li>• Functions, arrays, objects</li>
                    <li>• DOM manipulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 4: Advanced JS + Git</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• ES6+ features</li>
                    <li>• Callbacks, Promises, async/await</li>
                    <li>• Git workflows</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 2 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-500 text-white">Month 2</Badge>
                <CardTitle className="text-xl print:text-lg">React & Redux Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Week 5: React Fundamentals</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• JSX, components, props/state</li>
                    <li>• useState, useEffect</li>
                    <li>• React project setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 6: Routing & Forms</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• React Router v6</li>
                    <li>• Controlled/uncontrolled forms</li>
                    <li>• Basic validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 7: Redux Toolkit</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Redux Toolkit: slice, store, reducers</li>
                    <li>• Integration with React</li>
                    <li>• Middleware: redux-thunk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 8: Frontend Project</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Build React + Redux app</li>
                    <li>• API integration, routing</li>
                    <li>• Testing with React Testing Library</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 3 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-green-500 text-white">Month 3</Badge>
                <CardTitle className="text-xl print:text-lg">Backend with Node.js & MongoDB</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Week 9: Node.js & Express</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Node modules, FS, Events</li>
                    <li>• Express routes, middleware</li>
                    <li>• Basic server setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 10: MongoDB with Mongoose</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• CRUD operations</li>
                    <li>• Schemas, models, relationships</li>
                    <li>• Indexing, validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 11: APIs, Auth & Security</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• RESTful APIs</li>
                    <li>• JWT, bcrypt</li>
                    <li>• CORS, Helmet, rate-limiting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 12: Networking & Linux</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• OSI/TCP/IP overview</li>
                    <li>• DNS, HTTP, ports, firewalls</li>
                    <li>• Linux CLI, shell scripting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 4 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-500 text-white">Month 4</Badge>
                <CardTitle className="text-xl print:text-lg">Advanced Backend & DevOps</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Week 13: Service-Oriented Architecture</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Monolith vs SOA vs Microservices</li>
                    <li>• API versioning, REST vs RPC</li>
                    <li>• Service boundaries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 14: Microservices Introduction</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Single responsibility principle</li>
                    <li>• Inter-service communication</li>
                    <li>• Auth service + Product service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 15: Docker Fundamentals</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Containers vs VMs</li>
                    <li>• Docker CLI, Dockerfile</li>
                    <li>• Containerize full-stack apps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 16: Nginx & Deployment</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Nginx as reverse proxy</li>
                    <li>• Static hosting, file serving</li>
                    <li>• Deploying on cloud platforms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 5 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-500 text-white">Month 5</Badge>
                <CardTitle className="text-xl print:text-lg">Full Stack with Next.js & CI/CD</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Week 17: Next.js Fundamentals</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• File-based routing</li>
                    <li>• SSR vs CSR vs SSG</li>
                    <li>• Dynamic routing & layouts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 18: Full Stack with Next.js</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• API routes</li>
                    <li>• MongoDB integration</li>
                    <li>• Authentication with NextAuth.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 19: Docker Compose & CI/CD</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Multi-container apps</li>
                    <li>• GitHub Actions</li>
                    <li>• Test automation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 20: Capstone Planning</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Scalable architecture design</li>
                    <li>• Task management</li>
                    <li>• Tech stack finalization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 6 */}
          <Card className="print:border print:shadow-none print:break-inside-avoid">
            <CardHeader className="print:pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-pink-500 text-white">Month 6</Badge>
                <CardTitle className="text-xl print:text-lg">Capstone Project & Career Prep</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="print:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                <div>
                  <h4 className="font-semibold mb-2">Weeks 21-22: Capstone Execution</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Full-stack app development</li>
                    <li>• Dockerized microservices</li>
                    <li>• Secure Auth + Testing + CI/CD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 23: Deployment</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Host frontend/backend</li>
                    <li>• Docker Compose + Nginx</li>
                    <li>• Monitor logs, performance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Week 24: Showcase & Career Prep</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Final demo presentation</li>
                    <li>• Resume, LinkedIn, portfolio</li>
                    <li>• Mock interviews + system design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools & Technologies */}
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

      {/* Print Footer */}
      <div className="hidden print:block text-center text-sm text-muted-foreground mt-8 pt-4 border-t">
        <p>Full-Stack Development Program - 6-Month Curriculum</p>
      </div>
    </div>
  );
};

export default CourseMaterialPage;
