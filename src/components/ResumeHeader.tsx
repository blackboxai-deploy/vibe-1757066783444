import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ResumeHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-2">Gen Pedrasta</h1>
          <h2 className="text-xl text-gray-600 mb-6">GoHighLevel & Automation Specialist | Funnel Builder</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:gen.pedrasta@gmail.com" className="hover:text-black transition-colors">
                gen.pedrasta@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+639625279306" className="hover:text-black transition-colors">
                +639625279306
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;