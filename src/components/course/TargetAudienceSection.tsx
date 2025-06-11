
const TargetAudienceSection = () => {
  return (
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
  );
};

export default TargetAudienceSection;
