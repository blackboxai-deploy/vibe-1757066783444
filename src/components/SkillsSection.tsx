import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const coreSkills = [
    { name: 'Funnel Design', level: 'Expert', category: 'Design' },
    { name: 'Pipeline Management', level: 'Expert', category: 'Automation' },
    { name: 'Domain Set-up', level: 'Advanced', category: 'Technical' },
    { name: 'Email Campaign', level: 'Expert', category: 'Marketing' },
    { name: 'Automation', level: 'Expert', category: 'Technical' },
    { name: 'Prompt Management', level: 'Advanced', category: 'AI' },
    { name: 'A2P Registration', level: 'Advanced', category: 'Compliance' }
  ];

  const technicalSkills = [
    'GoHighLevel',
    'Make (Integromat)',
    'Zapier',
    'n8n',
    'ChatGPT',
    'Google Gemini',
    'Figma',
    'Framer',
    'Pipedrive',
    'Systeme.io',
    'ClickFunnels'
  ];

  const softSkills = [
    'Customer Service Excellence',
    'Technical Troubleshooting',
    'Written Communication',
    'Team Collaboration',
    'Independent Work',
    'Problem Solving',
    'Attention to Detail',
    'Time Management'
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Design': return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'Automation': return 'bg-black text-white border-black';
      case 'Technical': return 'bg-gray-200 text-gray-900 border-gray-400';
      case 'Marketing': return 'bg-gray-150 text-gray-800 border-gray-350';
      case 'AI': return 'bg-gray-800 text-white border-gray-800';
      case 'Compliance': return 'bg-gray-300 text-gray-900 border-gray-500';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-black text-white';
      case 'Advanced': return 'bg-gray-600 text-white';
      case 'Intermediate': return 'bg-gray-400 text-white';
      default: return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-gray-200 pb-2">
        Skills & Expertise
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Skills */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">
              Core Competencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {coreSkills.map((skill, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </Badge>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs w-fit ${getCategoryColor(skill.category)}`}
                >
                  {skill.category}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">
              Tools & Platforms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">
              Professional Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-black mb-2">Specialization Focus</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Specialized in GoHighLevel automation workflows, funnel optimization, and customer journey automation. 
          Experienced in integrating multiple platforms to create seamless business processes and improve conversion rates. 
          Strong background in customer service and technical problem-solving with proven ability to work independently 
          and deliver results in fast-paced environments.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;