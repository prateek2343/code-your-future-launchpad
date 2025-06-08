
import { Code, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Full-Stack Bootcamp</span>
            </div>
            <p className="text-gray-400">
              Transform your career with our comprehensive 6-month full-stack development program.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Program</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#outcomes" className="hover:text-white transition-colors">Learning Outcomes</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Who It's For</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@fullstackbootcamp.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MessageCircle className="h-4 w-4" />
                <span>Join our Discord community</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Full-Stack Development Bootcamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
