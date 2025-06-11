
const LearningOutcomesSection = () => {
  return (
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
  );
};

export default LearningOutcomesSection;
