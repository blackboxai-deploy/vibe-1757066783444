import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import PDFDownloadButton from './PDFDownloadButton';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-black text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Gen Pedrasta</h1>
              <h2 className="text-xl text-gray-300 mb-4">GoHighLevel & Automation Specialist | Funnel Builder</h2>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>gen.pedrasta@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+639625279306</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Profile Summary */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Profile Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Experienced GoHighLevel & Automation Specialist with expertise in funnel design, pipeline management, and workflow automation. 
              Proven track record in customer service excellence, virtual assistance, and technical problem-solving. Skilled in creating 
              efficient automated systems, managing email campaigns, and optimizing business processes through advanced automation tools.
            </p>
          </section>

          {/* Core Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Funnel Design',
                'Pipeline Management',
                'Domain Set-up',
                'Email Campaign',
                'Automation',
                'Prompt Management',
                'A2P Registration',
                'Customer Service',
                'Technical Support',
                'Virtual Assistance',
                'Administrative Support',
                'Social Media Management'
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="p-2 text-center justify-center bg-gray-100 text-black hover:bg-gray-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Work Experience</h3>
            
            <div className="space-y-6">
              {/* Give Freedom Homes */}
              <Card className="border-l-4 border-l-black">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Social Media & Administrative Assistant</h4>
                      <p className="text-gray-600">Give Freedom Homes, Florida</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      October 2024 - August 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Handled Social Media management and content creation</li>
                    <li>Created engaging content for various platforms</li>
                    <li>Provided comprehensive administrative assistance</li>
                  </ul>
                </CardContent>
              </Card>

              {/* WeTrain/VarsityGripz */}
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Executive Assistant</h4>
                      <p className="text-gray-600">WeTrain/VarsityGripz, Atlanta, Georgia</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      April 2024 - February 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Provided administrative and executive assistance to support CEO's daily tasks</li>
                    <li>Managed Shopify account operations and maintenance</li>
                    <li>Ensured CEO productivity tracking and reporting</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Thrift @ The Warehouse */}
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Virtual Assistant</h4>
                      <p className="text-gray-600">Thrift @ The Warehouse SATX, San Antonio, Texas</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      August 2023 - Present
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Provided comprehensive virtual support managing administrative tasks and correspondence</li>
                    <li>Implemented organizational systems to streamline workflows and improve time management</li>
                    <li>Achieved increased productivity and client satisfaction through efficient processes</li>
                  </ul>
                </CardContent>
              </Card>

              {/* WHG Customer Services */}
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Customer Due Diligence Analyst</h4>
                      <p className="text-gray-600">WHG Customer Services Philippines, Parañaque City</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      April 2023 - August 2023
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Conducted customer due diligence investigations to identify and assess potential risks</li>
                    <li>Analyzed customer data to identify patterns and trends indicating potential fraud or risks</li>
                    <li>Verified customer identities and conducted comprehensive background checks</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Amazon Operations */}
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Customer Service Associate</h4>
                      <p className="text-gray-600">Amazon Operations Services Philippines, Pasay City</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      April 2022 - March 2023
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Provided excellent customer service to Amazon delivery drivers</li>
                    <li>Investigated and resolved driver issues related to package delivery and safety concerns</li>
                    <li>Maintained up-to-date knowledge of policies and procedures for optimal driver support</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Telus International */}
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-black">Customer Service Representative</h4>
                      <p className="text-gray-600">Telus International Philippines, Taguig City</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      January 2019 - March 2021
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Demonstrated excellent written communication skills and attention to detail</li>
                    <li>Troubleshot technical issues and provided clear instructions to customers</li>
                    <li>Maintained expertise in Epic Games products and gaming industry knowledge</li>
                    <li>Worked effectively in fast-paced team environments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Projects & Gigs */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Recent Projects & Gigs</h3>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-black bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">GoHighLevel Expert for Real Estate Workflow Setup</h4>
                    <span className="text-sm text-gray-500">March 2025</span>
                  </div>
                  <p className="text-gray-700 text-sm">Email & SMS Integration specialist project</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-black bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">Edit Go High Level Funnel</h4>
                    <span className="text-sm text-gray-500">July 2025</span>
                  </div>
                  <p className="text-gray-700 text-sm">Funnel optimization and customization project</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">Organized, Analytical Marketing Virtual Assistant</h4>
                    <span className="text-sm text-gray-500">September 2024 - October 2024</span>
                  </div>
                  <p className="text-gray-700 text-sm">Marketing support and analytical assistance</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Education</h3>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-black mb-2">Bachelor of Secondary Education Major in English</h4>
                <p className="text-gray-600 mb-1">St. Dominic College of Asia</p>
                <p className="text-gray-600 mb-2">School of Arts, Sciences and Education</p>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar size={14} />
                  2015 - 2017
                </span>
              </CardContent>
            </Card>
          </section>

          {/* Tools and Platforms */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'GoHighLevel',
                'Make',
                'Zapier',
                'n8n',
                'ChatGPT',
                'Google Gemini',
                'Figma',
                'Framer',
                'Pipedrive',
                'Systeme.io',
                'ClickFunnels'
              ].map((tool) => (
                <div key={tool} className="bg-gray-100 p-3 rounded-lg text-center hover:bg-gray-200 transition-colors">
                  <span className="text-sm font-medium text-black">{tool}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-black text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Ready to Optimize Your GoHighLevel Workflows?</h3>
            <p className="text-gray-300 mb-4">Let's discuss how I can help streamline your automation and funnel processes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:gen.pedrasta@gmail.com" className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors">
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://wa.me/639625279306" className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                <Phone size={16} />
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
      
      {/* PDF Download Button */}
      <PDFDownloadButton />
    </div>
  );
};

export default Resume;