import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Organized, Analytical Marketing Virtual Assistant",
      duration: "September 2024 - October 2024",
      type: "Freelance Project",
      description: "Provided comprehensive marketing support with focus on data analysis and campaign optimization.",
      skills: ["Marketing Analysis", "Data Organization", "Campaign Management", "Virtual Assistance"]
    },
    {
      title: "GoHighLevel Expert for Real Estate Workflow Setup with Email & SMS Integration",
      duration: "March 2025",
      type: "GHL Specialist Project",
      description: "Designed and implemented complete real estate automation workflows in GoHighLevel with integrated email and SMS campaigns.",
      skills: ["GoHighLevel", "Real Estate Automation", "Email Integration", "SMS Campaigns", "Workflow Design"]
    },
    {
      title: "Edit Go High Level Funnel",
      duration: "July 2025",
      type: "Funnel Optimization",
      description: "Optimized and redesigned existing GoHighLevel funnels to improve conversion rates and user experience.",
      skills: ["Funnel Design", "GoHighLevel", "Conversion Optimization", "Landing Pages", "A/B Testing"]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Briefcase className="mr-3 h-6 w-6" />
        Recent Projects & Gigs
      </h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-l-4 border-l-gray-900 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit">
                  {project.type}
                </Badge>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <Calendar className="mr-2 h-4 w-4" />
                {project.duration}
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-2">Project Highlights</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Specialized in GoHighLevel automation and funnel optimization</li>
          <li>• Successfully integrated email and SMS campaigns for real estate workflows</li>
          <li>• Proven track record in marketing analysis and campaign management</li>
          <li>• Experience with conversion optimization and A/B testing methodologies</li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;