import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 mr-3 text-gray-700" />
        <h2 className="text-2xl font-bold text-black">Education</h2>
      </div>
      
      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-black">
            Bachelor of Secondary Education Major in English
          </CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">St. Dominic College of Asia</span>
            </div>
            <div className="hidden sm:block text-gray-400">•</div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">2015 - 2017</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            <div>
              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-300">
                School of Arts, Sciences and Education
              </Badge>
            </div>
            
            <div className="text-gray-600 text-sm leading-relaxed">
              <p>
                Completed comprehensive education program with focus on English language instruction, 
                communication skills, and educational methodologies. This foundation has been instrumental 
                in developing strong written and verbal communication abilities essential for client 
                interaction and technical documentation in automation and funnel building projects.
              </p>
            </div>
            
            <div className="pt-2">
              <h4 className="font-medium text-black mb-2">Relevant Skills Developed:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Written Communication
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Content Creation
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Research & Analysis
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Project Management
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EducationSection;